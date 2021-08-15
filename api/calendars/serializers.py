from rest_framework.serializers import ModelSerializer
from .models import Schedule

class ScheduleSerializer(ModelSerializer):
    class Meta:
        model = Schedule
        fields = '__all__'