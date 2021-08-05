from django.db import models

from companies.models.company import Company

class Contact(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    name = models.CharField(max_length=45)
    department = models.CharField(max_length=45)
    job_title = models.CharField(max_length=45)
    email = models.EmailField(null=True, blank=True)
    contact = models.CharField(null=True, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'contacts'