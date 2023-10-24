from ninja import Router
from .models import UsersDocs
from .schemas import UserDocsSchema
from django.forms.models import model_to_dict

router = Router()

@router.post("usuario-docs/")
def cadastro(request, usuarios:UserDocsSchema):
    dados = usuarios.dict()
