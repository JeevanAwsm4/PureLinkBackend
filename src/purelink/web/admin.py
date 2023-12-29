from django.contrib import admin
from web.models import Donor



class DonorAdmin(admin.ModelAdmin):
    list_display = ('name', 'blood_group', 'phone_no', 'aadhaar_number', 'age', 'address', 'has_tattoo', 'latitude', 'longitude')
    list_filter = ('blood_group', 'has_tattoo')
    search_fields = ('name', 'aadhaar_number', 'phone_no', 'address')

admin.site.register(Donor,DonorAdmin)