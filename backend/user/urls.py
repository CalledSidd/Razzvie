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
    path('newpost',views.NewPost.as_view(),name='newPost'),
    path('likepost/<str:pk>',views.LikePost, name='likepost'),
    # get for all comments post for new comment
    path('comments/<str:pk>',views.PostComments.as_view(),name='comments'),
    # send delete request for deleting a comment
    
    path('deletecomments/<int:id>',views.DeleteComment.as_view(),name='deletecomment'),
    path('password/change',views.ChangePassword, name='changepassword'),
    # send delete req for this url
    path('deletepost/<int:id>',views.DeletePost.as_view(), name='deletepost'),
]
