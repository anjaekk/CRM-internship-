from rest_framework import serializers
from rest_framework.fields import ReadOnlyField

from .models import Contract

class MonthlyProductTotalSerializer(serializers.ModelSerializer):

    class Meta:
        model = Contract
        fields = ["start_date", "price"]


class ProductSaleSerializer(serializers.ModelSerializer):
    product = ReadOnlyField(source="product.name")

    class Meta:
        model = Contract
        fields = ["product"]