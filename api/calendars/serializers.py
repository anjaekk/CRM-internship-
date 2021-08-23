from django.db.models import fields
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer, ReadOnlyField, Serializer, SlugRelatedField

from calendars.models import user_schedule

from .models import Schedule, UserSchedule
from companies.models import Contact, Company
from companies.serializers import ContactSheduleSerializer
from users.models import User
from users.serializers import UserSerializer


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
    company = SlugRelatedField(slug_field="name", read_only=True)
    date = ReadOnlyField(source="schedule_date")
    employee = UserScheduleSerializer(source="userschedule_set", many=True)

    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['contact'] = ContactSheduleSerializer(instance.contact).data
        return response
        
    class Meta:
        model = Schedule
        fields = ["id", "company", "date", "title", "content", "contact", "employee"]



class UserScheduleCreateSerializer(ModelSerializer):
    class Meta:
        model = UserSchedule
        fields = ["user"]
        

class CreateScheduleSerializer(ModelSerializer):
    company = serializers.CharField(source="company.name")
    employee = UserScheduleCreateSerializer(many=True, required=False)
    class Meta:
        model = Schedule
        exclude = ["contact"]

    def create(self, validated_data):
        company_data = validated_data.pop("company")
        user_data = validated_data.pop("employee")
        company, created = Company.objects.get_or_create(name=company_data["name"])

        schedule = Schedule.objects.create(
            schedule_date = validated_data["schedule_date"],
            title = validated_data["title"],
            content = validated_data["content"],
            company = company)

        for user in user_data:
            UserSchedule.objects.create(schedule=schedule, user=user["user"])

        return schedule
