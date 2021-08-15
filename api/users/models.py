from django.db import models
from django.contrib.auth.models import (BaseUserManager, AbstractBaseUser)

DEPARTMENT = (
    ("EXECUTIVE", "임원"),
    ("MANAGEMENT_SUPPORT", "경영지원"),
    ("SALES_SUPPORT", "영업지원"),
    ("TECHNICAL_SUPPORT", "개발"),
    ("MARKETING", "마케팅"),
)

JOB_TITLE = (
    ("CEO", "대표이사"),
    ("DIRECTOR", "이사"),
    ("DEPUTY_MANAGER", "부장"),
    ("DEPUTY_GENERAL_MANAGER", "차장"),
    ("MANAGE", "과장"),
    ("ASSISTANT_MANAGER", "대리"),
    ("SENIOR_STAFF", "주임"),
    ("STAFF", "사원"),
)


class UserManager(BaseUserManager):
    def create_user(self, employee_number, name, password=None, **extra_fields):
        if not employee_number:
            raise ValueError('must have user employee_number')
        if not name:
            raise ValueError('must have user name')
        if not password:
            raise ValueError('must have user password')
        user = self.model(
            employee_number = employee_number,
            name = name,
            **extra_fields
        )
        user.set_password(password)
        user.save(using=self._db)
        return user


class User(AbstractBaseUser):
    employee_number = models.CharField(max_length=45, unique=True)
    name = models.CharField(max_length=45)
    phone_number = models.CharField(max_length=45, unique=True)
    department = models.SmallIntegerField(choices=DEPARTMENT)
    job_title = models.SmallIntegerField(choices=JOB_TITLE)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    USERNAME_FIELD = 'employee_number'
    REQUIRED_FIELDS = ['name']

    objects = UserManager()

    def __str__(self):
        return self.name

    def has_perm(self, perm, obj=None):
        return True
    
    def has_module_perms(self, app_label):
        return True

    class Meta:
        db_table = 'users'