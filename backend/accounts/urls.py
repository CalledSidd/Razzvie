from django.urls import path 
from rest_framework_simplejwt.views import ( TokenRefreshView, )
from .views import MyTokenObtainPairSerializer, MyTokenObtainPairView, Signup, ListUser
from . import views
urlpatterns = [
    path('',views.getRoutes),
    path('token',MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh',TokenRefreshView.as_view(), name='token_refresh'),
    path('signup',Signup.as_view(),name='signup'),
    path('listuser',ListUser.as_view(),name='list_user')
]
