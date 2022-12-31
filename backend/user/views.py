from django.shortcuts import render





from rest_framework.views import APIView
from rest_framework.response import Response



from accounts.models import UserAccount


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
        user = request.user
