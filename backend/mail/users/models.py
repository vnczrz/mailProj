from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import ugettext_lazy as _

# import custom user manager
from .managers import CustomUserManager


# Create your models here.
'''Create a new class called CustomUser that subclasses AbstractUser'''
class CustomUser(AbstractUser): 
   
    username = None  # Removed the username field
    email = models.EmailField(_('email address'), unique=True) # Made the email field required and unique
    
    USERNAME_FIELD = 'email' #Set the USERNAME_FIELD -- which defines the unique identifier for the User model -- to email
    REQUIRED_FIELDS = []

    objects = CustomUserManager() ##Specified that all objects for the class come from the CustomUserManager

    def __str__(self):
        return self.email 