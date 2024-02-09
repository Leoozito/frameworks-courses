from cadastro.api import router as cadastro_router
from verify_doc.api import router as verify_doc_router
from ninja import NinjaAPI

api = NinjaAPI()

api.add_router("cadastros/", cadastro_router)
api.add_router("verify-doc", verify_doc_router)