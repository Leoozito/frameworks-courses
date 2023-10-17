from ninja import NinjaAPI

api = NinjaAPI()

@api.get("filmes/")
def hello(request):
    return "IUJERFBUOFEBUFEBUFEBUI"