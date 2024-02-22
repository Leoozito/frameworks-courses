from django.db import models

class Cliente(models.Model):
    placa = models.CharField(max_length=8, null=False, blank=False)
    nome = models.CharField(max_length=50, null=False, blank=False)
    cpf = models.CharField(max_length=14, null=False, blank=False)
   
    def __str__(self):
        return self.placa