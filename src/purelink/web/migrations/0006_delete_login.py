# Generated by Django 5.0 on 2023-12-29 03:03

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("web", "0005_alter_login_phone_number"),
    ]

    operations = [
        migrations.DeleteModel(
            name="LogIn",
        ),
    ]
