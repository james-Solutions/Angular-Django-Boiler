from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.

class SiteUser(AbstractUser):
    city = models.CharField(max_length=55)
    color = models.CharField(max_length=36, blank=True, null=True)
