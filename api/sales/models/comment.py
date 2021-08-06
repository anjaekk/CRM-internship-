from django.db import models

from sales.models.timestamp import TimeStamp
from sales.models.sale import Sale
from users.models import User


class Comment(TimeStamp):
    sale = models.ForeignKey(Sale, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    content = models.TextField()

    def __str__(self):
        return self.content

    class Meta:
        db_table = 'comments'