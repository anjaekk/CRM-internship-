# Generated by Django 3.2.6 on 2021-08-08 05:14

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('employee_number', models.CharField(max_length=45, unique=True)),
                ('password', models.CharField(max_length=200)),
                ('name', models.CharField(max_length=45)),
                ('phone_number', models.CharField(max_length=45, unique=True)),
                ('department', models.SmallIntegerField(choices=[(0, '임원'), (1, '경영지원'), (2, '영업지원'), (3, '개발'), (4, '마케팅')])),
                ('job_title', models.SmallIntegerField(choices=[(0, '대표이사'), (1, '이사'), (2, '부장'), (3, '차장'), (4, '과장'), (5, '대리'), (6, '주임'), (7, '사원')])),
                ('is_active', models.BooleanField(default=True)),
                ('is_admin', models.BooleanField(default=False)),
            ],
            options={
                'db_table': 'users',
            },
        ),
    ]
