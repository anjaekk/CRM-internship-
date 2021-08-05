from django.db import models

from users.models import User
from calendars.models.schedule import Schedule


class UserSchedule(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    Schedule = models.ForeignKey(Schedule, on_delete=models.CASCADE)

    class Meta:
        db_table = 'users_schedules'