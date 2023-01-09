from django.shortcuts import render
from django.core.serializers import serialize
from django.http import QueryDict


from rest_framework import status
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import GenericAPIView
from rest_framework.permissions import AllowAny
from rest_framework.parsers import MultiPartParser


from accounts.models import UserAccount
from .models import Post,Follow
from .serializers import (ProfileSerializer,
        HomeSerializer, NewPostSerializer,
        PostSerializer,FollowSerializer,
        FollowingSerializer)


# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    permission_classes = [AllowAny]
    routes = [
        'home',
        'profile/<int:id>',
        'post/<str:pk>',
        'userpost/<int:id>',
        'followers/<int:id>',
        'following/<int:id>',
        'newpost',    
    ]
    return Response(routes)



class Profile(APIView):
    def get_obj(self, id):
        try:
            UserAccount.objects.get(id = id , is_active = True)
            return Response(status=status.HTTP_200_OK)
        except Exception as e:
            print(e, "This is the occured exception")
            return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def get(self, request, id):
        data = {}
        user = self.get_obj(id)
        if user is not None:
            users   = ProfileSerializer(user, context = {'request' : request})
            p_count = len(Post.objects.filter(user = id))
            following = len(Follow.objects.filter(following = id))
            follower  = len(Follow.objects.filter(follower=id))
            data['Response']  = 'Success'
            data['post_count']     = p_count 
            data['following'] = following
            data['follower']  = follower
            return Response(data, status=status.HTTP_200_OK)


class Home(APIView):
    def get(self, request):
        print(request.user, "This is the request user")
        p = Post.objects.all().order_by('posted_at')
        post = HomeSerializer(p, many=True, context = {'request' : request})
        if p:
            return Response(post.data, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)


class UserPosts(APIView):
    def get(self, request, id):
        p = Post.objects.filter(user = id)
        post = HomeSerializer(p, many=True, context = {'request' : request})
        if p:
            return Response(post.data, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)


class NewPost(APIView):
    parser_classes = [MultiPartParser]
    def post(self, request):
        data = {} 
        user_id = request.user.id
        print(request.data)
        serializer = NewPostSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            data['data'] = serializer.data
            return Response(data, status = status.HTTP_201_CREATED)
        else:
            data['data'] = serializer.errors
            print(serializer.errors)
            return Response(data,status=status.HTTP_400_BAD_REQUEST)



class Followers(APIView):
    def get(self, request, id):
        follow = Follow.objects.filter(follower= id)
        follower = FollowSerializer(follow, many=True)
        print(follower)
        return Response(follower.data, status = status.HTTP_200_OK)


class Following(APIView):
    def get(self, request, id):
        follow  = Follow.objects.filter(following= id)
        following = FollowingSerializer(follow, many=True)
        return Response(following.data, status = status.HTTP_200_OK)



# Function based Views 


@api_view(['GET'])
def ViewPost(request, pk):
    p = Post.objects.get(id = pk)
    post = PostSerializer(p ,context = {'request' : request})
    if p:
        return Response(post.data, status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)