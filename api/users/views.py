from drf_yasg.utils import swagger_auto_schema

from django.contrib.auth import get_user_model

from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status

from .serializers import UserSignupSerializer, UserSignInSerializer


User = get_user_model()


class SignUpView(CreateAPIView):
    serializer_class = UserSignupSerializer
    permission_classes = [AllowAny]

    @swagger_auto_schema(
        request_body=UserSignupSerializer,
        response={
            "201":"SUCCESS",
            "400":"BAD_REQUEST"
        },
        operation_id="회원가입",
        operation_description="사번, 비밀번호, 이름, 핸드폰 번호, 부서(0 ~ 4), 직급(0 ~ 7)을 body에 담아 보내주세요.(비밀번호는 8자 이상)\n *부서 정보: 0 = 임원, 1 = 경영지원, 2 = 영업지원, 3 = 개발, 4 = 마케팅\n *직급 정보: 0 = 대표이사, 1 = 이사, 2 = 부장, 3 = 차장, 4 = 과장, 5 = 대리, 6 = 주임, 7 = 사원")
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception = True)
        serializer.save()
        return Response({"message":"SUCCESS"}, status = status.HTTP_201_CREATED)


class SignInView(APIView):
    serializer_class = UserSignInSerializer
    permission_classes = [AllowAny]

    @swagger_auto_schema(
        request_body=UserSignInSerializer,
        response={
            "200":"SUCCESS",
            "400":"BAD_REQUEST"
        },
        operation_id="로그인",
        operation_description="사번, 비밀번호를 body에 담아 보내주세요.")
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.data
        response = {
            "message":"SUCCESS",
            "employee_name":User.objects.get(employee_number = user["employee_number"]).name,
            "token":user["token"]
        }
        return Response(response, status = status.HTTP_200_OK)
