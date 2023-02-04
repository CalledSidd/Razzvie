from rest_framework import serializers
from accounts.serializers import UserSerializer
from . models import Post,Follow,Like,Comment
from accounts.models import UserAccount
from django.contrib.auth.hashers import make_password
import re

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'

class HomeSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Post
        fields = '__all__'




class FollowSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source = 'following.username')
    class Meta:
        model = Follow
        fields = '__all__'


class FollowingSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source = 'follower.username')
    class Meta:
        model = Follow
        fields = '__all__'


class NewPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'

class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = '__all__'


class ChangePasswordSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length = 120)
    confirm_password = serializers.CharField(max_length=120)
    def validate(self, data):
        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError('Passwords do not match')
        return data


class UserDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAccount
        fields = ['username', 'bio', 'name', 'email', 'date_joined', 'phone']

class CommentSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    class Meta:
        model = Comment
        fields = ['id', 'comment', 'created_at', 'post', 'user']
        read_only_fields = ['created_at', 'id']


class PostsSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source = 'userAccount.username')
    comment = serializers.IntegerField(source='get_comment_count', read_only = True)
    class Meta:
        model = Post
        fields = ['id', 'title', 'user','posted_at']
        read_only_fields = ['id', 'user', 'posted_at']


class ExploreSerializer(serializers.HyperlinkedModelSerializer): 
    class Meta:
        model = UserAccount()
        fields = ('id', 'username', 'bio', 'date_joined', 'pfp', 'gender','state', 'phone','email','name')


class PostSerializer(serializers.HyperlinkedModelSerializer):
    user = UserSerializer()
    likes = serializers.SerializerMethodField()
    def get_likes(self, instance):
        return self.context['likes']
    class Meta:
        model = Post
        fields = ('id','image','title','likes','posted_at','user')