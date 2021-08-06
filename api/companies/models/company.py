from django.db import models

PRIORITY = (
    ('l', 'low'),
    ('m', 'middle'),
    ('h', 'high'),
)

class Company(models.Model):
    name = models.CharField(max_length=200)
    contact = models.CharField(max_length=200)
    email = models.EmailField()
    address = models.CharField(max_length=1000)
    priority = models.CharField(max_length=45, choices=PRIORITY)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'companies'