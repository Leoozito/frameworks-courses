from ninja import ModelSchema, Schema
from .models import UsersDocs

class UserDocsSchema(ModelSchema):
    class Config:
        model = UsersDocs
        model_fields = ['nome', 'telefone', 'documento']