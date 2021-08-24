import json, requests

from django.contrib.auth import authenticate
from django.contrib.auth import get_user_model

from rest_framework.test import APITestCase
from rest_framework_jwt.settings import api_settings


User = get_user_model()

class SignUpTest(APITestCase):

    signup_url = "http://localhost:8000/users/signup"

    def test_signupview_post_user_registration_success(self):
        user_data = {
            "employee_number" : "testuser",
            "phone_number" : "000000000000",
            "password" : "12345678",
            "name" : "testuser",
            "department" : 4,
            "job_title" : 5
        }
        response = self.client.post(self.signup_url, data=user_data)
        self.assertEqual(201, response.status_code)

    def test_signupview_post_invalid_password(self):
        user_data = {
            "employee_number" : "testuser",
            "phone_number" : "000000000000",
            "password" : "1234",
            "name" : "testuser",
            "department" : "4",
            "job_title" : "5"
        }
        response = self.client.post(self.signup_url, data=user_data)
        self.assertEqual(400, response.status_code)

    def test_signupview_post_duplicated_employee_number(self):
        exist_user_data = {
            "employee_number" : "testuser",
            "phone_number" : "000000000000",
            "password" : "12345678",
            "name" : "testuser",
            "department" : 4,
            "job_title" : 5
        }
        response = self.client.post(self.signup_url, exist_user_data)
        self.assertEqual(201, response.status_code)

        new_user_data = {
            "employee_number" : "testuser",
            "phone_number" : "0000000000001",
            "password" : "12345678",
            "name" : "testuser",
            "department" : 4,
            "job_title" : 5
        }
        response = self.client.post(self.signup_url, new_user_data)
        self.assertEqual(400, response.status_code)

    def test_signupview_post_duplicated_phone_number(self):
        exist_user_data = {
            "employee_number" : "testuser1",
            "phone_number" : "00",
            "password" : "12345678",
            "name" : "testuser",
            "department" : 4,
            "job_title" : 5
        }
        response = self.client.post(self.signup_url, exist_user_data)
        self.assertEqual(201, response.status_code)

        new_user_data = {
            "employee_number" : "testuser2",
            "phone_number" : "00",
            "password" : "12345678",
            "name" : "testuser",
            "department" : 4,
            "job_title" : 5
        }
        response = self.client.post(self.signup_url, new_user_data)
        self.assertEqual(400, response.status_code)








    def test_signupview_post_keyerror_employee_number(self):
        user_data = {
            "phone_number" : "000000000000",
            "password" : "12345678",
            "name" : "testuser",
            "department" : 4,
            "job_title" : 5
        }
        response = self.client.post(self.signup_url, data=user_data)
        self.assertEqual(400, response.status_code)

    def test_signupview_post_keyerror_phone_number(self):
        user_data = {
            "employee_number" : "testuser",
            "password" : "12345678",
            "name" : "testuser",
            "department" : 4,
            "job_title" : 5
        }
        response = self.client.post(self.signup_url, data=user_data)
        self.assertEqual(400, response.status_code)

    def test_signupview_post_keyerror_password(self):
        user_data = {
            "employee_number" : "testuser",
            "phone_number" : "000000000000",
            "name" : "testuser",
            "department" : 4,
            "job_title" : 5
        }
        response = self.client.post(self.signup_url, data=user_data)
        self.assertEqual(400, response.status_code)

    def test_signupview_post_keyerror_name(self):
        user_data = {
            "employee_number" : "testuser",
            "phone_number" : "000000000000",
            "password" : "12345678",
            "department" : 4,
            "job_title" : 5
        }
        response = self.client.post(self.signup_url, data=user_data)
        self.assertEqual(400, response.status_code)

    def test_signupview_post_keyerror_department(self):
        user_data = {
            "employee_number" : "testuser",
            "phone_number" : "000000000000",
            "password" : "12345678",
            "name" : "testuser",
            "job_title" : 5
        }
        response = self.client.post(self.signup_url, data=user_data)
        self.assertEqual(400, response.status_code)

    def test_signupview_post_keyerror_job_title(self):
        user_data = {
            "employee_number" : "testuser",
            "phone_number" : "000000000000",
            "password" : "12345678",
            "name" : "testuser",
            "department" : 4,
        }
        response = self.client.post(self.signup_url, data=user_data)
        self.assertEqual(400, response.status_code)


JWT_PAYLOAD_HANDLER = api_settings.JWT_PAYLOAD_HANDLER
JWT_ENCODE_HANDLER = api_settings.JWT_ENCODE_HANDLER