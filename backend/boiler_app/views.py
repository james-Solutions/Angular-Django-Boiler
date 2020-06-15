from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import AllowAny

from boiler_app.serializers import *


# Create your views here.
class RegisterView(generics.CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = NewUserSerializer
