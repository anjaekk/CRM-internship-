from django.db import models
from django.db.models.fields.related import ManyToManyField

from sales.models import CreateTime, Product
from companies.models import Company
from sales.models import CreateTime
from users.models import User


class Contract(CreateTime):
    company = models.ForeignKey(Company, on_delete=models.SET_NULL, null=True)
    start_date = models.DateField()
    end_date = models.DateField()
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    unit_price = models.DecimalField(max_digits=18, decimal_places=2, null=True, blank=True)
    price = models.DecimalField(max_digits=18, decimal_places=2)
    user = ManyToManyField(User, through="UserContract")

    class Meta:
        db_table = "contracts"