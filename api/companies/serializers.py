# from rest_framework.relations import PrimaryKeyRelatedField
# from rest_framework.serializers import ModelSerializer

# from .models import Company
# from calendars.models import Schedule

# class CompaniesSerializer(ModelSerializer):
#     schedules = PrimaryKeyRelatedField(queryset=Schedule.objects.all(), many=True)

#     # def to_representation(self, value):
#     #     return value.name

#     class Meta:
#         model = Company
#         fields = "__all__"