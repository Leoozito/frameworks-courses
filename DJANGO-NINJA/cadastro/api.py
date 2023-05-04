from django.http import HttpRequest
from ninja import NinjaAPI, Schema, ModelSchema, UploadedFile
from ninja.types import DictStrAny
from .models import Livro
import json
from django.shortcuts import get_object_or_404
from django.forms.models import model_to_dict

import orjson # esta biblioteca é rapida em fazer serialização
from ninja.parser import Parser
from django.http import HttpRequest

class ORJSONParser(Parser):
    def parse_body(self, request: HttpRequest):
        return orjson.loads(request.body) # aqui eu troco qual serializador de dados que estou utilizando
    
api = NinjaAPI(parser=ORJSONParser()) # visuamente muda nada, mas de permoface, é mais rapido para serializar

@api.get('livro/') # URL normal
def listar(request):
    livro = Livro.objects.all()
    response = [{'id': i.id, 'titulo': i.titulo, 'descricao': i.descricao, 'autor': i.autor} for i in livro]
    return response

@api.get('livro/{id}') # URL com parametro de URL
def listar_livro(request, id: int):
    livro = get_object_or_404(Livro, id=id) # Como se trata de um dado só para serializar [...]
    return model_to_dict(livro) # [...] Da para transformar com a biblioteca do python um models e um dicionario

@api.get('livro_consulta/')
def listar_consulta(request, id: int= 1):
    livro = get_object_or_404(Livro, id=id)
    return model_to_dict(livro)

# class LivroSchema(Schema):
#     titulo: str
#     descricao: str
#     autor: str = None

class LivroSchema(ModelSchema):
    class Config:
        model = Livro
        # model_fields = ['titulo', 'descricao'] # passa dados por dados
        model_fields = "__all__" # pega todos os dados do nosso models do django

# from typing import List
# livro: List[LivroSchema]

@api.post('livro', response=LivroSchema) # post não pode barra no final # o response ja serializa MAIS de um dado
def livro_criar(request, livro: LivroSchema):
    l1 = livro.dict()
    livro = Livro(**l1)
    livro.save()
    return livro

@api.post('/file')
def file_upload(request, file: UploadedFile):
    print(file.size)
    return 1