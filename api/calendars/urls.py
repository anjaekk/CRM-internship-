from django.urls import path

from .views import CalendarsListView, ScheduleViewSet


schedule_list = ScheduleViewSet.as_view({
    'get': 'list',
    'post': 'create',
})

schedule_detail = ScheduleViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy',
})

urlpatterns = [
    path("", schedule_list, name="calendars"),
    path("/<int:pk>", schedule_detail)
]
