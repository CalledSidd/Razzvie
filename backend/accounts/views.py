from rest_framework.response import Response 
from rest_framework.decorators import api_view 
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework import status
from rest_framework import generics


from . models import UserAccount
from . serializers import UserAccountSerializer
import json

# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    permission_classes = [AllowAny]
    routes = [
        'token',
        'token/refresh',
    ]
    return Response(routes)
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    permission_classes = [AllowAny]
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username 
        token['is_admin'] = user.is_admin
        token['is_superuser'] = user.is_superuser
        return token

class MyTokenObtainPairView(TokenObtainPairView):
    permission_classes = [AllowAny]
    serializer_class = MyTokenObtainPairSerializer

class Signup(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        body     = request.body.decode('utf-8')
        body     = json.loads(body)
        username = body['username']
        name     = body['name']
        email    = body['email']
        phone    = body['phone']
        state    = body['state']
        password = body['password']
        print(username, "Username, New Signup")
        try:
            user = UserAccount.objects.create_user(email =email, name=name, username=username, phone=phone, password=password, state=state)
        except Exception as e:
            print(e, "This is the occured exception")
            return Response(status=status.HTTP_403_FORBIDDEN)
        return Response(status=status.HTTP_200_OK)


# Admin Views
class ListUser(generics.ListAPIView):
    queryset = UserAccount.objects.all()
    serializer_class = UserAccountSerializer


class BlockUser(APIView):
    def get(self, request, id):
        user = UserAccount.objects.filter(id = id)
        user.is_active = False 
        return Response(status = status.HTTP_200_OK)