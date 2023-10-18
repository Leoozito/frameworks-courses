import os
from celery import Celery
from django.conf import settings

# processo para configurar o celery dentro de uma aplicação DJANGO
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'myapirest.settings')

app = Celery('myapirest')  # endereço de onde o celery está (para detectar onde é a raiz do projeto)
app.config_from_object('django.conf:settings', namespace="CELERY")
app.autodiscover_tasks(lambda: settings.INSTALLED_APPS)
