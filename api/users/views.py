from drf_yasg.utils import swagger_auto_schema

from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status

from .serializers import UserSignupSerializer


class SignUpView(APIView):
    permission_classes = [AllowAny]
    
    @swagger_auto_schema(operation_description="partial_update description override", responses={404: 'slug not found'})
    def post(self, request):
        serializer = UserSignupSerializer(data=request.data)

        if serializer.is_valid(raise_exception = True):
            user = serializer.save()
            return Response({"message":"SUCCESS"}, status = status.HTTP_201_CREATED)
        return Response({"message":"INVALID_ERROR"}, status = status.HTTP_400_BAD_REQUEST)
