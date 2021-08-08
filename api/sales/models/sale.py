from django.db import models

from sales.models import CreateTime, Product, Progress
from companies.models import Company


class Sale(CreateTime):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    progress = models.ForeignKey(Progress, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.product

    class Meta:
        db_table = 'sales'