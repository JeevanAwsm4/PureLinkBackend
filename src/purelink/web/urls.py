from django.urls import path
from web.views import index,donate_blood

app_name = "web"

urlpatterns = [
    path('',index,name="index"),
    path('donate_blood/',donate_blood,name="donate_blood")
]