from django.urls import path
from . import views

urlpatterns = [
    path('',views.getRoutes),
    path('home',views.Home.as_view(),name='home'),
    path('profile/<int:id>',views.Profile.as_view(),name='profile'),
    path('post/<str:pk>',views.ViewPost.as_view(),name='viewPost'),
]
