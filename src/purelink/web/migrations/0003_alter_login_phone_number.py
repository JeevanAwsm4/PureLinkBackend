# Generated by Django 5.0 on 2023-12-28 14:53

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("web", "0002_login_alter_donor_has_tattoo"),
    ]

    operations = [
        migrations.AlterField(
            model_name="login",
            name="phone_number",
            field=models.CharField(blank=True, max_length=15, null=True),
        ),
    ]
