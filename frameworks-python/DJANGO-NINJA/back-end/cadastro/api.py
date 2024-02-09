from ninja import Router
from .models import Users
from django.forms.models import model_to_dict
from .schemas import UserSchema, ErrorSchema

router = Router()

@router.get("usuarios/", summary="Retorna todos os usuarios cadastrados")
def todos_usuarios(request):
    usuarios = Users.objects.all()
    response = [{
        'id': i.id, 'nome': i.nome, 'ddd': i.ddd, 'numero_telefone': i.numero_telefone, 'email': i.email,
        'cpf_cnpj': i.cpf_cnpj
    } for i in usuarios]
    return response


@router.get("usuarios/{int:id}")
def usuario(request, id: int):
    try:
        usuarios = Users.objects.get(id=id)
        return model_to_dict(usuarios)
    except Exception as e:
        return {"message": "Usuario não encontrado !"}

@router.post("cadastrar-usuario/", response={201: UserSchema, 422: ErrorSchema})
def cadastrar(request, usuario:UserSchema):
    dados = usuario.dict()
    usuario = Users(**dados)
    usuario.save()
    try:
        return usuario
    except Exception as e:
        message = "Erro ao cadastrar"
        return 400, message
