from django.db import models

from sales.models.timestamp import TimeStamp
from companies.models.company import Company
from sales.models.product import Product


class Contract(TimeStamp):
    company = models.ForeignKey(Company, on_delete=models.SET_NULL, null=True)
    start_date = models.DateField()
    end_date = models.DateField()
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    unit_price = models.DecimalField(max_digits=18, decimal_places=2, null=True, blank=True)
    price = models.DecimalField(max_digits=18, decimal_places=2)

    def __str__(self):
        return self.company

    class Meta:
        db_table = 'contracts'