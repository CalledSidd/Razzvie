from django.urls import path
from . import views

urlpatterns = [
    path('',views.getRoutes),
    path('home',views.Home.as_view(),name='home'),
    path('profile/<int:id>',views.Profile.as_view(),name='profile'),
    path('post/<str:pk>',views.ViewPost,name='viewPost'),
    path('userpost/<int:id>',views.UserPosts.as_view(),name='userPost'),
    path('followers/<int:id>',views.Followers.as_view(),name='followers'),
    path('following/<int:id>',views.Following.as_view(),name='following'),
    path('likepost/<str:pk>',views.LikePost, name='likePost'),
]
