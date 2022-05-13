from django.contrib.auth.views import LogoutView, LoginView
from django.views.generic import CreateView
from django.contrib.auth.models import User
from rest_framework import viewsets, mixins, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from .send_mail import send_mail
from .serializers import UserSerializer


class UserViewSet(viewsets.GenericViewSet, mixins.CreateModelMixin):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = [permissions.AllowAny]

    def perform_create(self, serializer):
        user = User.objects.create_user(**serializer.validated_data)
        user.set_password(serializer.validated_data['password'])
        return user


class CurrentUser(APIView):
    def get(self, request):
        serializer = UserSerializer(request.user)
        send_mail(serializer.data['email'])
        return Response(serializer.data)
