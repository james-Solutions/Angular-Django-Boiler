from django.urls import path
from boiler_app.views import *
urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
]