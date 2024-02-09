from django.db import models

class Users(models.Model):
    id = models.IntegerField(primary_key=True)
    nome = models.CharField(max_length=50)
    ddd = models.CharField(max_length=2)
    numero_telefone = models.CharField(unique=True, max_length=9)
    email = models.CharField(max_length=100, blank=True, null=True)
    cpf_cnpj = models.CharField(unique=True, max_length=15)

    def __str__(self):
        return self.nome
