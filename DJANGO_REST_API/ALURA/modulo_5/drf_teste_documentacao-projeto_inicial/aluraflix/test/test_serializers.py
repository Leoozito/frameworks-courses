from django.test import TestCase
from aluraflix.models import Programa
from aluraflix.serializers import ProgramaSerializer

# exemplo de test de unidade
class ProgramaSerializerTestCase(TestCase):
    def setUp(self):
        self.programa = Programa(
            titulo = 'Procurando ninguém em latim',
            data_lancamento = '2003-07-04',
            tipo='F',
            likes=2340,
            dislikes=40,
        )
        self.serializer = ProgramaSerializer(instance=self.programa)
    
    def test_verifica_campo_serializados(self):
        """Teste que verifica os campo que estão sendo serializados"""
        data = self.serializer.data
        self.assertEqual(set(data.keys()), {'titulo', 'tipo', 'data_lancamento', 'likes'})

    def test_verifica_conteudo_dos_campos_serializados(self):
        """Teste que verifica o conteudo dos campo que estão sendo serializados"""
        data = self.serializer.data
        self.assertEqual(data['titulo'], self.programa.titulo)
        self.assertEqual(data['data_lancamento'], self.programa.data_lancamento)
        self.assertEqual(data['tipo'], self.programa.tipo)
        self.assertEqual(data['likes'], self.programa.likes)