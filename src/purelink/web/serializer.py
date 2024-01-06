from rest_framework import serializers 
from .models import *
  
class DonorData(serializers.ModelSerializer): 
    class Meta: 
        model = Donor 
        fields = ['name', 'blood_group','phone_no','aadhaar_number','age','has_tattoo','latitude','longitude']