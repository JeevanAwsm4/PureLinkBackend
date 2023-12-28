from django.urls import path
from web.views import index,donate_blood,registered,trying_to_register

app_name = "web"

urlpatterns = [
    path('',index,name="index"),
    path('donate_blood/',donate_blood,name="donate_blood"),
    path('already_registered/',registered,name="registered"),
    path('trying_to_register/',trying_to_register,name="trying_to_register")
]