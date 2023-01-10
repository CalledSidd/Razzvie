from django.db import models
from datetime import date
from dateutil.relativedelta import relativedelta
from django.contrib.auth.models import AbstractBaseUser,BaseUserManager, PermissionsMixin
from .manager import UserManager
# Create your models here.



def dp(instance, filename):
    return 'pfp/{filename}'.format(filename = filename)


# Custom user Model
class UserAccount(AbstractBaseUser, PermissionsMixin):
    username        = models.CharField(max_length=100, unique=True)
    name            = models.CharField(max_length=100)
    email           = models.EmailField(unique=True)
    phone           = models.CharField(max_length=10, unique=True)
    state           = models.CharField(max_length=50)
    dob             = models.DateField(null=True)
    pfp             = models.ImageField(upload_to= dp, null=True)
    bio             = models.TextField(max_length=500, null=True)
    gender          = models.CharField(max_length=50, blank = True, null= True)
    date_joined     = models.DateTimeField(auto_now_add=True)
    is_active       = models.BooleanField(default=True)
    is_admin        = models.BooleanField(default=False)
    is_superadmin   = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'phone', 'name']

    @property
    def is_staff(self):
        return self.is_admin

    def __str__(self):
        today = date.today()
        delta = relativedelta(today, self.dob)
        return self.username