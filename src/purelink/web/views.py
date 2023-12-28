import json
from django.http import HttpResponse
from django.shortcuts import render, redirect
from web.models import Donor
from web.forms import DonorForm


def index(request):
    form = DonorForm()
    return render(request,'index.html', {'form': form})


def donate_blood(request):
    if request.method == 'POST':
        form = DonorForm(request.POST)
        if form.is_valid():
            phone_number = form.cleaned_data['phone_no']
            
            # Check if a user with the given phone number already exists
            existing_user = Donor.objects.filter(phone_no=phone_number).first()
            
            if existing_user:
                # User already registered, provide a message
                response_data = {
                    "status": "error",
                    "value": "error",
                    'title': "Already Registered",
                    "message": "A user with this phone number is already registered."
                }
            else:
                # User not registered, save the form
                form.save()
                
                response_data = {
                    "status": "success",
                    "value": "success",
                    'title': "Successfully Registered",
                    "message": "You have successfully registered to our newsletter"
                }
            
            return HttpResponse(json.dumps(response_data), content_type="application/json")
    
    else:
        form = DonorForm()

    return render(request, 'index.html', {'form': form})

