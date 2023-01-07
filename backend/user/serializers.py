from rest_framework import serializers
from accounts.serializers import UserSerializer
from . models import Post,Follow
from accounts.models import UserAccount

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