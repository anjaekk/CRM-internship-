from django.urls import path

from .views import CalendarsListView, ScheduleViewSet, CreateScheduleView


schedule_detail = ScheduleViewSet.as_view({
    "get": "retrieve",
    "put": "update",
    "patch": "partial_update",
    "delete": "destroy",
})

urlpatterns = [
    path("", CalendarsListView.as_view(), name="calendars"),
    path("/schedule", CreateScheduleView.as_view()),
    path("/<int:pk>", schedule_detail)
]
