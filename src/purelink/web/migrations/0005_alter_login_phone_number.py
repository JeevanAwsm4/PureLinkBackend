# Generated by Django 5.0 on 2023-12-28 15:19

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("web", "0004_alter_login_phone_number"),
    ]

    operations = [
        migrations.AlterField(
            model_name="login",
            name="phone_number",
            field=models.CharField(default="", max_length=15),
        ),
    ]
