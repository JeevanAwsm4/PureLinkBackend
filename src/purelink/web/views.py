import json
from django.http import HttpResponse
from django.shortcuts import render, redirect
from web.models import Donor,LogIn
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
                    "message": "A user with this phone number is already registered.",
                    'redirect':'already_registered/'
                }
            else:
                # User not registered, save the form
                form.save()
                
                response_data = {
                    "status": "info",
                    "value": "success",
                    'title': "An OTP has been sent",
                    "message": "Check your messages",
                    'otp':1800,
                }
            
            return HttpResponse(json.dumps(response_data), content_type="application/json")
    
    else:
        form = DonorForm()

    return render(request, 'index.html', {'form': form})


def registered(request):
    phone_number = request.POST.get("phoneNumber")  # Assuming you meant to use "email" instead of "phoneNumber"

    if not LogIn.objects.filter(phone_number=phone_number).exists():
        LogIn.objects.create(
            phone_number=phone_number
            # other fields...
        )

        response_data = {
            "status": "info",
            "value": "success",
            'title': "An OTP has been sent",
            "message": "Check your messages to receive the OTP"
        }
        
        return render(request, 'already.html', {'response_data': response_data})

    else:
        response_data = {
            "status": "error",
            "value": "error",
            'title': "An Error occurred",
            "message": "Try again after some time"
        }

        return render(request, 'already.html', {'response_data': response_data})

    # If the code reaches here, it means the registration was successful
    return HttpResponse(json.dumps(response_data), content_type="application/javascript")