#from django.contrib.auth.models import User
from django.contrib.auth import get_user_model, authenticate
from django.contrib.auth.models import update_last_login
from django.db.models import fields

from rest_framework import serializers

from rest_framework_jwt.settings import api_settings
from django.contrib.auth.backends import BaseBackend


from .models import User

# User = get_user_model()

class UserSignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs = {"password": {"write_only":True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        if len(validated_data["password"]) < 8:
            raise serializers.ValidationError(
                "The password has to be at least 8 chars long"
            )
        return user


JWT_PAYLOAD_HANDLER = api_settings.JWT_PAYLOAD_HANDLER
JWT_ENCODE_HANDLER = api_settings.JWT_ENCODE_HANDLER

class UserSignInSerializer(serializers.Serializer):

    class Meta:
        model = User
        fields = ('employee_number', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    employee_number = serializers.CharField(max_length=45)
    password = serializers.CharField(max_length=200, write_only=True)
    token = serializers.CharField(max_length=255, read_only=True)

    def validate(self, data):
        print("====================3====================")
        print(JWT_ENCODE_HANDLER)
        print(data.get("employee_number"))
        employee_number = data.get("employee_number", None)
        password = data.get("password", None)
        print("====================4+============")
        print(employee_number, password)
        user = authenticate(employee_number=employee_number, password=password)
        print("===================5===================")
        print(user)
        if not user:
            raise serializers.ValidationError(
                "A user with this employee number and password is not found."
            )
        try:
            payload = JWT_PAYLOAD_HANDLER(user)
            payload['name'] = User.objects.get(employee_number=user).name
            jwt_token = JWT_ENCODE_HANDLER(payload)
            print("=============2=================")
            print(jwt_token)
            update_last_login(None, user)
            
        except User.DoesNotExist:
            raise serializers.ValidationError(
                "User with given employee number and password does not exists"
            )
        return {'token' : jwt_token}