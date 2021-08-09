from rest_framework import serializers

from users.models import User

class UserSignupSerializer(serializers.ModelSerializer):
    def validate_password(self, validated_data):
        if len(validated_data['password']) < 8:
            raise serializers.ValidationError(
                "The password has to be at least 8 chars long"
            )
        return User.objects.create(**validated_data)

    def create(self, validated_data):
        user = User.objects.create(
            employee_number = validated_data['emplyee_number'],
            name = validated_data['name'],
            phone_number = validated_data['phone_number'],
            department = validated_data['department'],
            job_title = validated_data['job_title'],
        )
        user.set_password(validated_data['password'])
        user.save()
        return user