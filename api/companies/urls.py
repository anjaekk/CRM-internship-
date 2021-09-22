from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CompanyAPIView

router = DefaultRouter()
router.register(r"",CompanyAPIView)

urlpatterns = [
    path("",include(router.urls)),
]