from django.db.models import fields
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer, ReadOnlyField, SlugRelatedField

from calendars.models import user_schedule

from .models import Schedule, UserSchedule
from companies.models import Contact, Company
from companies.serializers import ContactSheduleSerializer
from users.models import User


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
    class Meta:
        model = Schedule
        # fields = ["title", "content", "schedule_date", "company", "contact", "user"]
        exclude = ["contact"]

    def create(self, validated_data):
        # contact_data = validated_data.pop("contact")
        # contact = Contact.objects.get(name = contact_data["name"], phone_number = contact_data["phone_number"])

        company_data = validated_data.pop('company')
        company = Company.objects.get(name=company_data["name"])

        # contact = Contact.objects.get_or_create(contact = contact)

        # for user in validated_data["employee"]:
        #     if not User.objects.filter(
        #         employee_number = user["employeeNumber"],
        #         name = user["name"],
        #         phone_number = user["contact"],
        #     ).exists():
        #         raise serializers.ValidationError("User does not exist")      
        
        

        
        user_list = []

        # user_data = validated_data.pop('employee')

        # for user in validated_data["employee"]:
        #     employee_number = User.objects.get(employee_number = user["employeeNumber"]).id
        #     user_list.append(employee_number)


        # user = User.objects.get_or_create(
        #     employee_number = validated_data["employee"]["employeeNumber"],
        #     name = validated_data["employee"]["name"],
        #     phone_number = validated_data["employee"]["contact"],
        #     )
        user_data = validated_data.pop('employee')
        schedule = Schedule.objects.create(
            schedule_date = validated_data["schedule_date"],
            title = validated_data["title"],
            content = validated_data["content"],
            company = company)
        
        for user in user_data:
            employee_number = User.objects.get(employee_number = user["employeeNumber"])
            schedule.user_set.add(employee_number)
        # # schedule = Schedule.objects.create(**validated_data)
        # for user in user_data:
        #     user_dict = dict(user)
        #     UserSchedule.objects.create(schedule=schedule, user=user_dict["user"])
        return schedule
