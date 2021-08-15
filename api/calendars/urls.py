from django.urls import path

from .views import CalendarsListView

# schedule_detail = ScheduleViewSet.as_view({
#     "get":"retrieve",
#     "post":"create",
#     "put": "update",
#     "delete": "destroy"
# })

urlpatterns = [
    path("", CalendarsListView.as_view(), name="calendars"),
]
