import json

from django.contrib.auth import authenticate
from django.contrib.auth import get_user_model

from rest_framework.test import APITestCase
from rest_framework_jwt.settings import api_settings
from rest_framework.authtoken.models import Token

from companies.models import Company, Contact
from .models import Schedule
from users.models import User


class CalendarsListViewTest(APITestCase):

    calendarslist_url = "/calendars"

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
            company_id = 1,
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
        )
        self.schedule.user.add(self.user)

        JWT_PAYLOAD_HANDLER = api_settings.JWT_PAYLOAD_HANDLER
        JWT_ENCODE_HANDLER = api_settings.JWT_ENCODE_HANDLER
        payload = JWT_PAYLOAD_HANDLER(self.user)
        self.access_token = JWT_ENCODE_HANDLER(payload)

    def tearDown(self):
        self.company.delete()
        self.contact.delete()
        self.user.delete()
        self.schedule.delete()

    def test_calendarslistview_get_success(self):
        self.client.credentials(HTTP_AUTHORIZATION = 'Bearer ' + self.access_token)
        response = self.client.get(self.calendarslist_url)
        self.assertEqual(200, response.status_code)

    def test_calendarslistview_get_date_success(self):
        self.client.credentials(HTTP_AUTHORIZATION = 'Bearer ' + self.access_token)
        response = self.client.get(self.calendarslist_url, {"year" : 2021, "month" : 11})
        self.assertEqual(200, response.status_code)
    

class ScheduleViewTest(APITestCase):

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
            company_id = 1,
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
        )
        self.schedule.user.add(self.user)

        self.schedule_url = "/calendars/" + str(self.schedule.id)

        JWT_PAYLOAD_HANDLER = api_settings.JWT_PAYLOAD_HANDLER
        JWT_ENCODE_HANDLER = api_settings.JWT_ENCODE_HANDLER
        payload = JWT_PAYLOAD_HANDLER(self.user)
        self.access_token = JWT_ENCODE_HANDLER(payload)

    def tearDown(self):
        self.company.delete()
        self.contact.delete()
        self.user.delete()
        self.schedule.delete()

    def test_scheduledetail_get_success(self):
        self.client.credentials(HTTP_AUTHORIZATION = "Bearer " + self.access_token)
        response = self.client.get(self.schedule_url)
        self.assertEqual(200, response.status_code)
    
    def test_scheduledetail_delete(self):
        self.client.credentials(HTTP_AUTHORIZATION = "Bearer " + self.access_token)
        response = self.client.delete(self.schedule_url)
        self.assertEqual(204, response.status_code)

    def test_scheduledetail_title_update(self):
        self.client.credentials(HTTP_AUTHORIZATION = "Bearer " + self.access_token)
        response = self.client.patch(self.schedule_url, {"title": "meeting!"})
        self.assertEqual(200, response.status_code)

    def test_scheduledetail_content_update(self):
        self.client.credentials(HTTP_AUTHORIZATION = "Bearer " + self.access_token)
        response = self.client.patch(self.schedule_url, {"content": "update content!"})
        self.assertEqual(200, response.status_code)