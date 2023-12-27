from django.shortcuts import render
from web.forms import DonorForm


def index(request):
    form = DonorForm()
    return render(request,'index.html', {'form': form})


def donate_blood(request):
    if request.method == 'POST':
        form = DonorForm(request.POST)
        if form.is_valid():
            form.save()

            response_data = {
                "status": "success",
                "value": "success",
                'title': "Successfully Registered",
                "message": "You have successfully registered to our newsletter"
            }

            return render(request, 'empty.html', response_data)
    else:
        form = DonorForm()

    return render(request, 'index.html', {'form': form})

