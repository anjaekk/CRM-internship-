from rest_framework.serializers import ModelSerializer, ReadOnlyField, SlugRelatedField

from .models import Schedule, UserSchedule
from companies.models import Contact, Company
from companies.serializers import ContactSheduleSerializer


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

    # def create(self, validated_data):
    #     schedule = Company.objects.get