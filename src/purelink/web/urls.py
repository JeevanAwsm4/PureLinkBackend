from web.views import index,donate_blood,registered,check_phone_number,checkotp,empty,Toreact,want_blood
from django.views.generic import TemplateView
from django.urls import path, include, re_path
from rest_framework.routers import DefaultRouter
app_name = "web"


urlpatterns = [
    path('',index,name="index"),
    path('donate_blood/',donate_blood,name="donate_blood"),
    path('want_blood/',want_blood,name="want_blood"),
    path('already_registered/',registered,name="registered"),
    path('check_phone_number/', check_phone_number, name='check_phone_number'),
    path('checkotp/',checkotp,name="checkotp"),
    path('empty/',empty,name="empty"),
     path('dashboard_admin/', Toreact.as_view(), name="something"),
]