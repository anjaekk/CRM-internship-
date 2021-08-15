from rest_framework.serializers import ModelSerializer, ReadOnlyField

from .models import Schedule


class ScheduleSerializer(ModelSerializer):
    company_name = ReadOnlyField(source='company.name')

    class Meta:
        model = Schedule
        fields = ['id', 'company_name', 'schedule_date']
