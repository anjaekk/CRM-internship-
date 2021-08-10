from drf_yasg.utils import swagger_auto_schema
from rest_framework import response

from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status

from .serializers import UserSignupSerializer


class SignUpView(APIView):
    permission_classes = [AllowAny]

    @swagger_auto_schema(
        request_body=UserSignupSerializer,
        response={
            "201":"SUCCESS",
            "400":"BAD_REQUEST"
        },
        operation_id="회원가입",
        operation_description="사번, 비밀번호, 이름, 핸드폰 번호, 부서(0 ~ 4), 직급(0 ~ 7)을 body에 담아 보내주세요.(비밀번호는 8자 이상)")
    def post(self, request):
        serializer = UserSignupSerializer(data=request.data)

        if serializer.is_valid(raise_exception = True):
            user = serializer.save()
            return Response({"message":"SUCCESS"}, status = status.HTTP_201_CREATED)
        return Response({"message":"INVALID_ERROR"}, status = status.HTTP_400_BAD_REQUEST)
