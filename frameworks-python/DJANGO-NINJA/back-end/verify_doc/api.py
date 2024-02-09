from ninja import Router
from .models import UsersDocs
from .schemas import UserDocsSchema
from django.forms.models import model_to_dict
from base64 import standard_b64encode

router = Router()

@router.post("usuario-docs/")
def cadastro(request, usuarios:UserDocsSchema):
    documento = open(usuarios.documento, 'b').read()
    descripto_doc = standard_b64encode(documento).decode('utf-8')
    data = {
        'nome_usuario': usuarios.nome,
        'telefone': usuarios.telefone,
        'documento': descripto_doc,
    }
    try:
        return data
    except Exception as e:
        return 400, "Erro no documento"