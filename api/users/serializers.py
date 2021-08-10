from django.contrib.auth.models import User

from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()


class UserSignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

    def validate(self, validated_data):
        if len(validated_data.get("password")) < 8:
            raise serializers.ValidationError(
                "The password has to be at least 8 chars long"
            )
        return validated_data
