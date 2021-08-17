from django.db import models
from django.contrib.auth.models import (BaseUserManager, AbstractBaseUser)

DEPARTMENT = (
    (0, "임원"),
    (1, "경영지원"),
    (2, "영업지원"),
    (3, "개발"),
    (4, "마케팅"),
)

JOB_TITLE = (
    (0, "대표이사"),
    (1, "이사"),
    (2, "부장"),
    (3, "차장"),
    (4, "과장"),
    (5, "대리"),
    (6, "주임"),
    (7, "사원"),
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