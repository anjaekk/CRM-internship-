from rest_framework import serializers

from .models import Contract

class MonthlyProductTotalSerializer(serializers.ModelSerializer):

    class Meta:
        model = Contract
        fields = ["start_date", "price"]