from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response

from .models import Company
from .serializers import CompaniesSerializer

class CompanyAPIView(ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompaniesSerializer
    permission_classes = [AllowAny]