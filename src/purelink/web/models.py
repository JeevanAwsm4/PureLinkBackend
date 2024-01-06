from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator


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
    latitude = models.DecimalField(
        max_digits=9, decimal_places=6, null=True, blank=True,
        validators=[MinValueValidator(-90), MaxValueValidator(90)]
    )
    longitude = models.DecimalField(
        max_digits=9, decimal_places=6, null=True, blank=True,
        validators=[MinValueValidator(-180), MaxValueValidator(180)]
    )

    name = models.CharField(max_length=255)
    blood_group = models.CharField(max_length=3, choices=BLOOD_GROUPS, default='')
    phone_no = models.CharField(max_length=15)
    aadhaar_number = models.CharField(max_length=12)
    age = models.IntegerField()
    address = models.TextField()
    has_tattoo = models.CharField(max_length=3, choices=TATTOO_CHOICES)
    latitude = models.CharField(max_length=255)
    longitude = models.CharField(max_length=255)

    def __str__(self):
        return self.name
    
class Wantblood(models.Model):
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
        ('', 'any tattoo'),
        ('yes', 'Yes'),
        ('no', 'No'),
    ]
    name = models.CharField(max_length=255)
    blood_group = models.CharField(max_length=3, choices=BLOOD_GROUPS, default='')
    phone_no = models.CharField(max_length=10)
    hospitals = models.CharField(max_length=100)
    age = models.IntegerField(
        validators=[
            MinValueValidator(18, message="Age cannot be negative"),
            MaxValueValidator(60, message="Age cannot be greater than 60"),
        ]
    )

    def __str__(self):
        return self.name
    class Wantblood(models.Model):
        hospitals = models.CharField(max_length=255)



