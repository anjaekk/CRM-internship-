from drf_yasg.utils import swagger_auto_schema
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework import status

from .serializers import UserSignupSerializer

@swagger_auto_schema
class SignUpView(APIView):
    def post(request):
        serializer = UserSignupSerializer(data = request.data)

        if serializer.is_valied(raise_exception = True):
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.data, status = status.HTTP_400_BAD_REQUEST)
