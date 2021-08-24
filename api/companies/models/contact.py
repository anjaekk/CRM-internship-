from django.db import models

from companies.models import Company

class Contact(models.Model):
    company = models.ForeignKey(Company, related_name="company", on_delete=models.CASCADE)
    name = models.CharField(max_length=45)
    department = models.CharField(max_length=45)
    job_title = models.CharField(max_length=45)
    email = models.EmailField(null=True, blank=True)
    phone_number = models.CharField(max_length=45, null=True, blank=True)

    class Meta:
        db_table = "contacts"