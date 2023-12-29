from django.urls import path
from web.views import index,donate_blood,registered,check_phone_number,checkotp

app_name = "web"

urlpatterns = [
    path('',index,name="index"),
    path('donate_blood/',donate_blood,name="donate_blood"),
    path('already_registered/',registered,name="registered"),
    path('check_phone_number/', check_phone_number, name='check_phone_number'),
    path('checkotp/',checkotp,name="checkotp")
]