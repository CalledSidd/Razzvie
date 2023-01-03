from django.shortcuts import render
from django.core.serializers import serialize



from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response



from accounts.models import UserAccount
from .models import Post
from .serializers import ProfileSerialzer


# Create your views here.
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
            users   = ProfileSerialzer(user, context = {'request' : request})
            p_count = len(Post.objects.filter(user = id))
            data['Response'] = 'Success'
            data['count']    = p_count
            
            return Response(data, status=status.HTTP_200_OK)


class Home(APIView):
    def get(self, request):
        print(request.user, "This is the request user")
        p = Post.objects.all().order_by('posted_at')
        post = ProfileSerialzer(p, many=True, context = {'request' : request})
        if p:
            return Response(post.data, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)