from rest_framework import serializers
from accounts.serializers import UserSerializer
from . models import Post

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'

class HomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'


class PostSerializer(serializers.HyperlinkedModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Post
        fields = ('id','image','title','likes','posted_at','user')


