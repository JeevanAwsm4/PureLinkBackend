from web.views import index,donate_blood,registered,check_phone_number,checkotp,empty,Toreact,want_blood,about,restrictions
from django.views.generic import TemplateView
from django.urls import path, include, re_path
from rest_framework.routers import DefaultRouter
app_name = "web"


urlpatterns = [
    path('',index,name="index"),
    path('about/',about,name="about"),
    path('restrictions/',restrictions,name="restrictions"),
    path('donate_blood/',donate_blood,name="donate_blood"),
    path('want_blood/',want_blood,name="want_blood"),
    path('already_registered/',registered,name="registered"),
    path('check_phone_number/', check_phone_number, name='check_phone_number'),
    path('checkotp/',checkotp,name="checkotp"),
    path('empty/',empty,name="empty"),
     path('dashboard_admin/', Toreact.as_view(), name="something"),
]