from django.urls import path
from web.views import index,donate_blood,registered

app_name = "web"

urlpatterns = [
    path('',index,name="index"),
    path('donate_blood/',donate_blood,name="donate_blood"),
    path('already_registered/',registered,name="already_registered")
]