from django.urls import path
from . import views
# o  arquivo views vai ter uma função, que vai ser responsavel em receber uma requisição e retornar uma response

urlpatterns = [
    path('cadastro/', views.cadastro, name='cadastro'),
    path('login/', views.login, name='login'),
    path('', views.home, name='home'),
    path('salvar', views.salvar, name='salvar')
]