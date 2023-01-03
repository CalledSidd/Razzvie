from django.urls import path
from . import views

urlpatterns = [
    path('home',views.Home.as_view(),name='home'),
    path('profile/<int:id>',views.Profile.as_view(),name='profile'),
]
