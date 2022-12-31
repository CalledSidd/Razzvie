from django.contrib.auth.base_user import BaseUserManager

# user creation
class UserManager(BaseUserManager):
    def create_user(self, email, name, username, phone, password = None, **kwargs):
        if not email:
            raise ValueError('User must have an email')
        email = self.normalize_email(email)
        user  = self.model(email = email, name = name, username = username, phone = phone,**kwargs)
        user.set_password(password)
        user.save(using = self._db)
        return user 


    def create_superuser(self, email, name, username, phone, password, **kwargs):
        user = self.create_user(email, name, username, phone, password, **kwargs)
        user.is_superadmin = True 
        user.is_admin      = True 
        user.is_superuser  = True
        user.save(using = self._db)
        return user 
