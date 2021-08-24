from django.db import models

from users.models import User
from sales.models import Sale

class UserSale(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    sale = models.ForeignKey(Sale, on_delete=models.CASCADE)

    class Meta:
        db_table = "users_sale"