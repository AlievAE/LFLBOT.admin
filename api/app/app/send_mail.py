import smtplib
from django.conf import settings


def send_mail(email):
    server = smtplib.SMTP_SSL(settings.ADMIN_EMAIL_PROTOCOL)
    server.ehlo()
    server.login(settings.ADMIN_EMAIL, settings.ADMIN_PASSWORD)

    text = f'From: {settings.ADMIN_EMAIL}\r\n' \
           f'To: {email}\r\n' \
           f'Subject: LFLBOT.admin\r\n\r\n' \
           f'You have successfully logged in LFLBOT.admin!\r\n'

    server.sendmail(settings.ADMIN_EMAIL, [email], text)
    server.close()
