import json

from django.contrib.auth import authenticate
from django.contrib.auth import get_user_model

from rest_framework.test import APITestCase
from rest_framework_jwt.settings import api_settings


User = get_user_model()

class SignUpTest(APITestCase):

    signup_url = "/users/signup"

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


class SignInTest(APITestCase):

    signin_url = "/users/signin"

    def setUp(self):
        self.user = User.objects.create_user(
        employee_number = "testuser",
        phone_number = "000000000000",
        password = "12345678",
        name = "testuser",
        department = 4,
        job_title = 5)
        self.authentication = authenticate(
            employee_number = "testuser",
            phone_number = "000000000000",
            password = "12345678",
            name = "testuser",
        )

    def tearDown(self):
        self.user.delete()

    def test_signinview_post_success(self):
        user_data = {
            "employee_number" : "testuser",
            "password" : "12345678"
        }

        payload = JWT_PAYLOAD_HANDLER(self.authentication)
        jwt_token = JWT_ENCODE_HANDLER(payload)
        response = self.client.post(self.signin_url, data=user_data)

        self.assertEqual(200, response.status_code)
        self.assertTrue(response.json(), 
            {
                "message": "SUCCESS",
                "employee_name": "testuser",
                "token": jwt_token
            }
        )
    
    def test_signinview_post_password_does_not_match(self):
        user_data = {
            "employee_number" : "testuser",
            "password" : "00"
        }
        response = self.client.post(self.signin_url, data=user_data)
        self.assertEqual(400, response.status_code)
    
    def test_signinview_post_user_does_not_exists(self):
        user_data = {
            "employee_number" : "doesnotexist",
            "password" : "12345678"
        }
        response = self.client.post(self.signin_url, data=user_data)
        self.assertEqual(400, response.status_code)

    def test_signinview_post_keyerror_employee_number(self):
        user_data = {
            "password" : "12345678"
        }
        response = self.client.post(self.signin_url, data=user_data)
        self.assertEqual(400, response.status_code)
        
    def test_signinview_post_keyerror_password(self):
        user_data = {
            "employee_number" : "testuser",
        }
        response = self.client.post(self.signin_url, data=user_data)
        self.assertEqual(400, response.status_code)