from django.shortcuts import render


def index(request):
    return render(request,'index.html')


def donate_blood(request):
    return render(request, 'empty.html')