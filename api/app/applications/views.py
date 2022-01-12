from django.shortcuts import render

from .models import Application, Team, Player
from .serializers import ApplicationSerializer, PlayerSerializer, TeamSerializer
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from django.conf import settings
import datetime


class PlayerListView(viewsets.ModelViewSet):
    serializer_class = PlayerSerializer
    queryset = Player.objects.all()

class ApplicationListView(viewsets.ModelViewSet):
    serializer_class = ApplicationSerializer
    queryset = Application.objects.all()

class TeamListView(viewsets.ModelViewSet):
    serializer_class = TeamSerializer
    queryset = Team.objects.all()