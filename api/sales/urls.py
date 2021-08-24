from django.urls import path

from .views import MonthlyProductTotalView


urlpatterns = [
    path("", MonthlyProductTotalView.as_view()),
]