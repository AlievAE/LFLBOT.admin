from django.db import models
from datetime import datetime
from django.utils import timezone

class Application(models.Model):
    tg_nickname = models.CharField(max_length=100)
    team = models.CharField(max_length=100)
    site_id = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.tg_nickname} из команды {self.team}'

class Player(models.Model):
    team = models.CharField(max_length=100)
    tg_nickname = models.CharField(max_length=100)
    site_id = models.CharField(max_length=100)
    subscription_date = models.DateField(default=timezone.now().date())

    def __str__(self):
        return f'{self.tg_nickname} подписан на {self.team} с {self.subscription_date}'

class Team(models.Model):
    team = models.CharField(max_length=100)
    site_id = models.CharField(max_length=100)
    subscription_date = models.DateField()
    logo = models.ImageField(blank=True, upload_to='logo', default='logo/default-logo.png')

    def __str__(self):
        return f'{self.team} отслеживается с {self.subscription_date}'