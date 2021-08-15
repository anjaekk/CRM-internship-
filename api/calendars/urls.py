from django.urls import path

from .views import CalendarsListView

urlpatterns = [
    path('', CalendarsListView.as_view(), name='calendars'),
]
