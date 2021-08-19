from django.db.models import fields
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer, ReadOnlyField, Serializer

from .models import Schedule, UserSchedule
from companies.models import Contact

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
    companyEmployee_name = ReadOnlyField(source="contact.name")
    companyEmployee_contact = ReadOnlyField(source="contact.phone_number")
    employee = UserScheduleSerializer(source="userschedule_set", many=True)

    class Meta:
        model = Schedule
        fields = ["id", "company", "date", "title", "content", "companyEmployee_name", "companyEmployee_contact", "employee"]

    # def create(self, validated_data)    