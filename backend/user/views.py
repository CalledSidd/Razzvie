from django.shortcuts import render
from django.core.serializers import serialize
from django.http import QueryDict
from django.shortcuts import get_object_or_404


from rest_framework import status
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import (
    GenericAPIView,
    ListCreateAPIView,
    RetrieveDestroyAPIView,
    )
from rest_framework.permissions import AllowAny
from rest_framework.parsers import MultiPartParser


from accounts.models import UserAccount
from .models import Post,Follow,Like,Comment
from .permissions import IsAuthor
from .serializers import (ProfileSerializer,
        HomeSerializer,
        NewPostSerializer,
        PostSerializer,
        FollowSerializer,
        FollowingSerializer, 
        LikeSerializer,
        ChangePasswordSerializer,
        UserDataSerializer,
        CommentSerializer,
        ExploreSerializer,
        )


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
        'likepost/<str:pk>',
        'comments',
        'deletecomment/<int:id>',
        'password/change',
        'deletepost/<int:id>',
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

class PostComments(ListCreateAPIView):
    serializer_class = CommentSerializer
    def get_queryset(self):
        return Comment.objects.order_by('-created_at').filter(post_id = self.kwargs['pk'])
    def perform_create(self, serializer):
        post = Post.objects.get(id = self.kwargs['pk'])
        return serializer.save(user = self.request.user, post = post)

class LikePost(APIView):
    def post(self, request, pk):
        post = Post.objects.get(id = pk)
        user = request.user
        ss = Like.objects.create(post = post, user = user)
        likes = Like.objects.filter(post = post).count()
        like = PostSerializer(post, context = {'request' : request, 'likes' : likes})
        return Response(like.data, status=status.HTTP_201_CREATED)


class DeleteComment(RetrieveDestroyAPIView):
    serializer_class = CommentSerializer
    permission_classes = [IsAuthor]
    def get_object(self):
        comment = get_object_or_404(Comment, id = self.kwargs['pk'])
        self.check_object_permissions(self.request, comment)
        return comment

class DeletePost(RetrieveDestroyAPIView):
    serializer_class = PostSerializer 
    permission_classes = [IsAuthor]
    def get_object(self):
        post = get_object_or_404(Post, id = self.kwargs['pk'])
        self.check_object_permissions(self.request, post)
        return post



class Explore(APIView):
    def get(self, request):
        user = UserAccount.objects.all().filter(is_active=True).exclude(is_admin=True)
        users = ExploreSerializer(user, many=True, context = {'request': request})
        return Response(users.data, status = status.HTTP_200_OK)



# Function based Views 


@api_view(['GET'])
def ViewPost(request, pk):
    p = Post.objects.get(id = pk)
    likes = Like.objects.filter(post = p).count()
    print(likes,"This is the number of likes for the post")
    post = PostSerializer(p, context = {'request' : request, 'likes' : likes})
    if p:
        return Response(post.data, status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)


@api_view(['POST'])
def ChangePassword(request):
    data = ChangePasswordSerializer(data = request.data)
    if data.is_valid():
        request.user.set_password(data.validated_data['password'])
        request.user.save()
        return Response(status = status.HTTP_200_OK)
    return Response(data.errors, status = status.HTTP_400_BAD_REQUEST)