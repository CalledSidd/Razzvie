from rest_framework import serializers
from accounts.serializers import UserSerializer
from . models import Post,Follow,Like
from accounts.models import UserAccount
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


class PostSerializer(serializers.HyperlinkedModelSerializer):
    user = UserSerializer()
    likes = serializers.SerializerMethodField()
    def get_likes(self, instance):
        return self.context['likes']
    class Meta:
        model = Post
        fields = ('id','image','title','likes','posted_at','user')


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
    password_2 = serializers.CharField(required = True)
    def validate(self, data):
        password = data['password']
        password_2 = data['password_2']
        password_pattern = re.compile(r'^[a-zA-Z0-9]{8}[0-9]*[A-Za-z]*$')
        password_verify = password_pattern.search(password_2)
        if password == password_2:
            raise serializers.ValidationError(
                {"password_2": "New Password is too similiar to the old passord"}
                )
        return data
    class Meta:
        model = Accounts
        fields = ['password', 'password_2']
