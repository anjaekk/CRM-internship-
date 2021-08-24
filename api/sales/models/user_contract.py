from django.db import models

from users.models import User
from sales.models import Contract

class UserContract(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    contract = models.ForeignKey(Contract, on_delete=models.CASCADE)

    class Meta:
        db_table = "users_contracts"