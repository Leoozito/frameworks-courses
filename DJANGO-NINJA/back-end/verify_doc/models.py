from django.db import models

class UsersDocs(models.Model):
    nome = models.CharField(max_length=50)
    telefone = models.CharField(max_length=10)
    documento = models.CharField(unique=True, max_length=50)

    def __str__(self):
        return self.nome