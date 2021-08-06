from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=200)
    unit = models.CharField(max_length=45)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'products'