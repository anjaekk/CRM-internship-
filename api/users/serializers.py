from django.contrib.auth import get_user_model
from django.contrib.auth import authenticate
from django.contrib.auth.models import update_last_login

from rest_framework import serializers 
from rest_framework_jwt.settings import api_settings


User = get_user_model()


class UserSignupSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = "__all__"
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
        fields = ("employee_number", "password", "name")
        extra_kwargs = {"password": {"write_only": True}}

    employee_number = serializers.CharField(max_length=45)
    password = serializers.CharField(max_length=200, write_only=True)
    token = serializers.CharField(max_length=255, read_only=True)

    def validate(self, data):
        user = authenticate(**data)
        if not user:
            raise serializers.ValidationError("A user with this employee number and password is not found.")

        try:
            payload = JWT_PAYLOAD_HANDLER(user)
            jwt_token = JWT_ENCODE_HANDLER(payload)
            update_last_login(None, user)

        except User.DoesNotExist:
            raise serializers.ValidationError("User with given employee number and password does not exists")
        user = {
            "employee_number": user,
            "token": jwt_token,
            }
        return user

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ["id", "employee_number"]