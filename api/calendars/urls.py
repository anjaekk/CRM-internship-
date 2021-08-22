from django.urls import path

from .views import CalendarsListView, ScheduleViewSet, ScheduleCreateView


schedule_detail = ScheduleViewSet.as_view({
    "get": "retrieve",
    "put": "update",
    "patch": "partial_update",
    "delete": "destroy",
})

urlpatterns = [
    path("", CalendarsListView.as_view(), name="calendars"),
    path("/schedule", ScheduleCreateView.as_view()),
    path("/<int:pk>", schedule_detail)
]
