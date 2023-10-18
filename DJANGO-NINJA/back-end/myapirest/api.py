from cadastro.api import router as cadastro_router
from ninja import NinjaAPI

api = NinjaAPI()

api.add_router("cadastros/", cadastro_router)