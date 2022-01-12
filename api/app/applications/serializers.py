from rest_framework import serializers
from .models import Application, Team, Player


class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = ['id', 'tg_nickname', 'team', 'site_id']

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ['id', 'team', 'subscription_date', 'site_id', 'logo']

class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = ['id', 'tg_nickname', 'team', 'site_id', 'subscription_date']
