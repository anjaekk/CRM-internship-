from datetime import datetime

from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi

from django.db.models   import Q
from django.shortcuts import get_object_or_404

from rest_framework.generics import CreateAPIView, ListAPIView
from rest_framework.filters    import OrderingFilter
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import viewsets

from .models import Schedule
from .serializers import CalendarSerializer, ScheduleSerializer, CreateScheduleSerializer, CalendarQuerySerializer

from rest_framework import status
from rest_framework.response import Response


class CalendarsListView(ListAPIView):
    serializer_class = CalendarSerializer
    permission_classes = [AllowAny]
    filter_backends = [OrderingFilter]

    year = openapi.Parameter("year", openapi.IN_QUERY, description="year", type=openapi.TYPE_STRING)
    month = openapi.Parameter("month", openapi.IN_QUERY, description="month", type=openapi.TYPE_STRING)

    @swagger_auto_schema(
        manual_parameters = [year, month],
        query_serializer = CalendarQuerySerializer,
        response={
            "200":"SUCCESS",
            "400":"BAD_REQUEST"
        },
        security=[],
        operation_id="캘린더 리스트",
        operation_description="해당 year과 month를 쿼리로 보내주세요.")
    def get_queryset(self):
        queryset = Schedule.objects.all()
        year = self.request.query_params.get("year", datetime.now().year)
        month = self.request.query_params.get("month", datetime.now().month)
        if year and month:
            queryset = queryset.filter(Q(schedule_date__year=year)& Q(schedule_date__month=month))
            return queryset


class ScheduleViewSet(viewsets.ModelViewSet):
    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer
    permission_classes = [IsAuthenticated]


class ScheduleCreateView(CreateAPIView):
    queryset = Schedule.objects.all()
    serializer_class = CreateScheduleSerializer
    permission_classes = [IsAuthenticated]


    @swagger_auto_schema(
        request_body=CreateScheduleSerializer,
        response={
            "200":"SUCCESS",
            "400":"BAD_REQUEST",
            "401":"UNAUTHORIZED_USER"
        },
        operation_id="스케줄 생성")
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception = True)
        serializer.save(schedule=request.data)
        return Response({"message":"SUCCESS"}, status = status.HTTP_201_CREATED)
