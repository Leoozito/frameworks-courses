import { useEffect, useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import SectionCardsTeam from './components/SectionCardsTeam';
import Footer from './components/Footer';

function App() {

  const teams_tech = [
    {
        nome: 'Front-End',
        corPrimaria: '#82CFFA',
        corSecundaria: '#E8F8FF',
    },
    {
        nome: 'Data Sciense',
        corPrimaria: '#A6D157',
        corSecundaria: '#F0F8E2',
    },
    {
        nome: 'Devops',
        corPrimaria: '#E06B69',
        corSecundaria: '#FDE7E8',
    },
    {
        nome: 'UX e Design',
        corPrimaria: '#D86EBF',
        corSecundaria: '#FAE5F5',
    },
    {
        nome: 'Mobile',
        corPrimaria: '#FEBA05',
        corSecundaria: '#FFF5D9',
    },
    {
        nome: 'Inovação e Gestão',
        corPrimaria: '#FF8A29',
        corSecundaria: '#FFEEDF',
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const adicionaNovoColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <>
      <Banner/>
      <Form
        times={teams_tech.map(team => team.nome)}
        colaboradorCadastrados={colaborador => adicionaNovoColaborador(colaborador)}
      />

      {teams_tech.map(team => 
        <SectionCardsTeam 
          key={team.nome}
          title={team.nome} 
          corPrimaria={team.corPrimaria} 
          corSecundaria={team.corSecundaria} 
          colaboradores={colaboradores.filter(colaborador => colaborador.time === team.nome)}
        />
      )}

      <Footer/>
    </>
  );
}

export default App;
