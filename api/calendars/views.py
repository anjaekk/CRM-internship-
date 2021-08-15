from django.db.models   import Q
from datetime import datetime, timedelta

from rest_framework.generics import ListAPIView
from rest_framework.filters    import OrderingFilter
from rest_framework.permissions import IsAuthenticated

from .models import Schedule
from .serializers import ScheduleSerializer


class CalendarsListView(ListAPIView):
    serializer_class = ScheduleSerializer
    permission_classes = [IsAuthenticated]

    filter_backends = [OrderingFilter]

    def get_queryset(self):
        queryset = Schedule.objects.all()
        year = self.request.query_params.get("year", datetime.now().year)
        month = self.request.query_params.get("month", datetime.now().month)
        if year and month:
            queryset = queryset.filter(Q(schedule_date__year=year)& Q(schedule_date__month=month))
            return queryset

# >>> s1.schedule_date
# datetime.datetime(2021, 8, 16, 6, 23, 53, tzinfo=<UTC>)