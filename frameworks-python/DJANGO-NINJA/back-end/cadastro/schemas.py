from ninja import ModelSchema, Schema
from .models import Users

class UserSchema(ModelSchema):
    class Config:
        model = Users
        model_fields = ['id', 'nome', 'ddd', 'numero_telefone', 'email', 'cpf_cnpj']

class ErrorSchema(Schema):
    message: str