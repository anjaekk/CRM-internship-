import json

from django.contrib.auth import authenticate
from django.contrib.auth import get_user_model

from rest_framework.test import APITestCase
from rest_framework_jwt.settings import api_settings

from companies.models import Company, Contact
from .models import Schedule
from users.models import User
class CalendarsListViewTest(APITestCase):

    calendarslist_url = "http://localhost:8000/calendars"

    def setUp(self):
        self.company = Company.objects.create(
            id = 1,
            name = "testcompany",
            contact = "0211112222",
            email = "test@email.com",
            address = "testaddress",
            priority = "m"
        )

        self.contact = Contact.objects.create(
            id = 1,
            company = 1,
            name = "contactname",
            department = "sale",
            job_title = "manager",
            email = "test@email.com",
            phone_number = "010-1111-2222"
        )

        self.user = User.objects.create_user(
        employee_number = "testuser",
        phone_number = "000000000000",
        password = "12345678",
        name = "testuser",
        department = 4,
        job_title = 5
        )

        self.schedule = Schedule.objects.create(
            id = 1,
            title = "testschedule",
            content = "testcontent",
            schedule_date = "2021-01-01 06:23:53",
            company_id = 1,
            contact_id = 1,
            user = self.user
        )

    def tearDown(self):
        self.company.delete()
        self.contact.delete()
        self.user.delete()
        self.schedule.delete()

    # def test_calendarslistview_get_success(self)