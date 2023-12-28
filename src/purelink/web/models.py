from django.db import models


class Donor(models.Model):
    BLOOD_GROUPS = [
        ('', 'Select Blood Group'),
        ('A+', 'A+'),
        ('A-', 'A-'),
        ('B+', 'B+'),
        ('B-', 'B-'),
        ('AB+', 'AB+'),
        ('AB-', 'AB-'),
        ('O+', 'O+'),
        ('O-', 'O-'),
    ]

    TATTOO_CHOICES = [
        ('','any tatoo'),
        ('yes', 'Yes'),
        ('no', 'No'),
    ]

    name = models.CharField(max_length=255)
    blood_group = models.CharField(max_length=3, choices=BLOOD_GROUPS, default='')
    phone_no = models.CharField(max_length=15)
    aadhaar_number = models.CharField(max_length=12)
    age = models.IntegerField()
    address = models.TextField()
    has_tattoo = models.CharField(max_length=3, choices=TATTOO_CHOICES)
    latitude = models.FloatField()
    longitude = models.FloatField()

    def __str__(self):
        return self.name


class LogIn(models.Model):
    phone_number = models.CharField(max_length=15,null=True, blank=True)

    def __str__(self):
        return self.phone_number