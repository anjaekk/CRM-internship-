from django.db.models import fields
from rest_framework.serializers import ModelSerializer, ReadOnlyField

from .models import Schedule


class CalendarSerializer(ModelSerializer):
    title = ReadOnlyField(source="company.name")
    start = ReadOnlyField(source="schedule_date")
    class Meta:
        model = Schedule
        fields = ["id", "title", "start"]

class ScheduleSerializer(ModelSerializer):
    class Meta:
        model = Schedule
        fields = "__all__"