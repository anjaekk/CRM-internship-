from drf_yasg.utils import swagger_auto_schema

from django.db.models   import Q
from datetime import datetime

from rest_framework.generics import ListAPIView
from rest_framework.filters    import OrderingFilter
from rest_framework.permissions import IsAuthenticated

from .models import Schedule
from .serializers import ScheduleSerializer


class CalendarsListView(ListAPIView):
    serializer_class = ScheduleSerializer
    permission_classes = [IsAuthenticated]

    filter_backends = [OrderingFilter]

    @swagger_auto_schema(
        request_body=ScheduleSerializer,
        response={
            "200":"SUCCESS",
            "400":"BAD_REQUEST"
        },
        operation_id="캘린더",
        operation_description="해당 year과 month를 쿼리로 보내주세요.")
    def get_queryset(self):
        queryset = Schedule.objects.all()
        year = self.request.query_params.get("year", datetime.now().year)
        month = self.request.query_params.get("month", datetime.now().month)
        if year and month:
            queryset = queryset.filter(Q(schedule_date__year=year)& Q(schedule_date__month=month))
            return queryset

# >>> s1.schedule_date
# datetime.datetime(2021, 8, 16, 6, 23, 53, tzinfo=<UTC>)