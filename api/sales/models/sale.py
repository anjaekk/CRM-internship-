from django.db import models

from sales.models.timestamp import TimeStamp
from sales.models.product import Product
from companies.models.company import Company
from sales.models.progress import Progress


class Sale(TimeStamp):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    progress = models.ForeignKey(Progress, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.product

    class Meta:
        db_table = 'sales'