from django import forms
from web.models import Donor

class DonorForm(forms.ModelForm):
    class Meta:
        model = Donor
        fields = '__all__'
        widgets = {
            'name': forms.TextInput(attrs={'class': 'customInput', 'placeholder': 'Enter your name','id':'donateName'}),
            'blood_group': forms.Select(attrs={'class': 'customSelect', 'placeholder': 'Select Blood Group','id':'donateBloodGroup'}),
            'phone_no': forms.TextInput(attrs={'class': 'customInput', 'placeholder': 'Enter your phone number','id':'donatePhoneNo'}),
            'aadhaar_number': forms.TextInput(attrs={'class': 'customInput', 'placeholder': 'Enter your Aadhaar number','id':'donateAadhaarNumber'}),
            'age': forms.NumberInput(attrs={'class': 'customInput', 'placeholder': 'Enter your age','id':'donateAge'}),
            'address': forms.Textarea(attrs={'class': 'customInput', 'placeholder': 'Enter your address','id':'donateAddress'}),
            'has_tattoo': forms.Select(attrs={'class': 'customInput','id':''}),
            'latitude': forms.TextInput(attrs={'class': 'customInput', 'placeholder': 'Enter latitude','id':'latitude'}),
            'longitude': forms.TextInput(attrs={'class': 'customInput', 'placeholder': 'Enter longitude','id':'longitude'}),
        }
