from django.urls import path
from . import views

urlpatterns = [
    path('',views.getRoutes),
    path('home',views.Home.as_view()),
    path('profile/<int:id>',views.Profile.as_view()),
    path('post/<str:pk>',views.ViewPost,name='viewPost'),
    path('userpost/<int:id>',views.UserPosts.as_view()),
    path('followers/<int:id>',views.Followers.as_view()),
    path('following/<int:id>',views.Following.as_view()),
    path('newpost',views.UserPosts.as_view()),
    path('likepost/<str:pk>',views.LikePost.as_view()),
    path('explore',views.Explore().as_view()),
    # get for all comments post for new comment
    path('comments/<str:pk>',views.PostComments.as_view()),
    # send delete request for deleting a comment
    path('deletecomment/<str:pk>',views.DeleteComment.as_view()),
    path('password/change',views.ChangePassword),
    # send delete req for this url
    path('deletepost/<str:pk>',views.DeletePost.as_view()),
    
]
