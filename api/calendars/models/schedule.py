from django.db import models

from sales.models.timestamp import TimeStamp
from calendars.models.user_schedule import UserSchedule
from companies.models.company import Company
from companies.models.contact import Contact

from users.models import User


class Schedule(TimeStamp):
    user = models.ManyToManyField(User, through=UserSchedule)
    title = models.CharField(max_length=300)
    content = models.TextField()
    date = models.DateTimeField()
    customer = models.ForeignKey(Company, on_delete=models.CASCADE)
    contact = models.ForeignKey(Contact, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.title
        
    class Meta:
        db_table = 'schedules'
