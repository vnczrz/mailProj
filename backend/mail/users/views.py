# from mail.users.serializers import User
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from users.serializers import UserSerializer
from django.contrib.auth import get_user_model
from rest_framework.authtoken.models import Token

# Create your views here.
class UserCreate(APIView):
    """
    Creates the user
    """

    def post(self, request, format='json'):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                ###create auth token
                token = Token.objects.create(user=user)
                json = serializer.data
                json['token'] = token.key

                return Response(json, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
