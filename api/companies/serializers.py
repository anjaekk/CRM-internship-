from rest_framework.relations import RelatedField
from rest_framework.serializers import ModelSerializer

from .models import Company, Contact

class CompaniesSerializer(ModelSerializer):

    class Meta:
        model = Company
        fields = "__all__"
