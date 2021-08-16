from django.db.models import fields
from rest_framework.serializers import ModelSerializer, ReadOnlyField

from .models import Schedule, UserSchedule


class CalendarSerializer(ModelSerializer):
    title = ReadOnlyField(source="company.name")
    start = ReadOnlyField(source="schedule_date")
    class Meta:
        model = Schedule
        fields = ["id", "title", "start"]


class UserScheduleSerializer(ModelSerializer):
    employeeNumber = ReadOnlyField(source="user.employee_number")
    name = ReadOnlyField(source="user.name")
    contact = ReadOnlyField(source="user.phone_number")

    class Meta:
        model = UserSchedule
        fields = ["employeeNumber", "name", "contact"]


class ScheduleSerializer(ModelSerializer):
    company = ReadOnlyField(source="company.name")
    date = ReadOnlyField(source="schedule_date")
    user = UserScheduleSerializer(source="userschedule_set", many=True)

    class Meta:
        model = Schedule
        fields = ["company", "date", "title", "content", "user"]