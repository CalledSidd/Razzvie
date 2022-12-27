from django.db import models
from django.contrib.auth.models import AbstractBaseUser,BaseUserManager, PermissionsMixin
from .manager import UserManager
# Create your models here.



# Custom user Model
class UserAccount(AbstractBaseUser, PermissionsMixin):
    username        = models.CharField(max_length=100, unique=True)
    name            = models.CharField(max_length=100)
    email           = models.EmailField(unique=True)
    phone           = models.CharField(max_length=10, unique=True)
    state           = models.CharField(max_length=50)
    date_joined     = models.DateTimeField(auto_now_add=True)
    active_listings = models.IntegerField(null=True, blank=True)
    is_active       = models.BooleanField(default=True)
    is_admin        = models.BooleanField(default=False)
    is_superadmin   = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'phone', 'name']

    @property
    def is_staff(self):
        return self.is_admin