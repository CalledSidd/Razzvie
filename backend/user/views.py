from django.shortcuts import render
from django.core.serializers import serialize
from django.http import QueryDict


from rest_framework import status
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import GenericAPIView
from rest_framework.permissions import AllowAny


from accounts.models import UserAccount
from .models import Post
from .serializers import ProfileSerializer,HomeSerializer, PostSerializer


# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    permission_classes = [AllowAny]
    routes = [
        'home',
        'profile/<int:id>',
        'post/<str:pk>',
    ]
    return Response(routes)
class Profile(APIView):
    def get_obj(self, id):
        try:
            UserAccount.objects.get(id = id , is_active = True)
            return Response(status=status.HTTP_200_OK)
        except Exception as e:
            print(e, "This is the occured exception")
            return Response(status=status.HTTP_403_FORBIDDEN)

    def get(self, request, id):
        data = {}
        user = self.get_obj(id)
        if user is not None:
            users   = ProfileSerializer(user, context = {'request' : request})
            p_count = len(Post.objects.filter(user = id))
            data['Response'] = 'Success'
            data['count']    = p_count      
            return Response(data, status=status.HTTP_200_OK)


class Home(APIView):
    def get(self, request):
        print(request.user, "This is the request user")
        p = Post.objects.all().order_by('posted_at')
        post = HomeSerializer(p, many=True, context = {'request' : request})
        print(p, "This is the queryset in home")
        if p:
            return Response(post.data, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)


class UserPosts(APIView):
    def get(self, request, id):
        p = Post.objects.filter(user = id)
        post = HomeSerializer(p, many=True)
        if p:
            return Response(post.data, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)


class ViewPost(APIView):
    def get(self, request, pk):
        p    = Post.objects.get(id = pk)
        post = PostSerializer(p,  context = {'request' : request})
        print(type(p), "this is the queryset")
        return Response(post.data, status=status.HTTP_200_OK)

class NewPost(APIView):
    pass