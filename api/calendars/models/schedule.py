from django.db import models

from sales.models import CreateTime
from companies.models import Company, Contact
from users.models import User


class Schedule(CreateTime):
    title = models.CharField(max_length=300)
    content = models.TextField()
    schedule_date = models.DateTimeField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    contact = models.ForeignKey(Contact, on_delete=models.SET_NULL, null=True)
    user = models.ManyToManyField(User, through="UserSchedule")
        
    class Meta:
        db_table = "schedules"
