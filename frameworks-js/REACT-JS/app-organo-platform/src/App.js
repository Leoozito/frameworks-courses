import { useEffect, useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import SectionCardsTeam from './components/SectionCardsTeam';
import Footer from './components/Footer';

function App() {

  const [teams, setTeams] = useState([
    {
        nome: 'Front-End',
        corPrimaria: '#82CFFA',
        cor: '#E8F8FF',
    },
    {
        nome: 'Data Sciense',
        corPrimaria: '#A6D157',
        cor: '#F0F8E2',
    },
    {
        nome: 'Devops',
        corPrimaria: '#E06B69',
        cor: '#FDE7E8',
    },
    {
        nome: 'UX e Design',
        corPrimaria: '#D86EBF',
        cor: '#FAE5F5',
    },
    {
        nome: 'Mobile',
        cor: '#FFF5D9',
    },
    {
        nome: 'Inovação e Gestão',
        cor: '#FFEEDF',
    }
  ])

  const [colaboradores, setColaboradores] = useState([])

  const adicionaNovoColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  function mudarCorDoTime(cor, nome) {
    setTimes(times.map(time => {
        if(time.nome=== nome) {
            time.cor = cor;
        }
        return time;
    }));
  }

  const deletarColaborador = () => {
    console.log("usuario deletado")
  }

  return (
    <>
      <Banner/>
      <Form
        times={teams.map(team => team.nome)}
        colaboradorCadastrados={colaborador => adicionaNovoColaborador(colaborador)}
      />

      {teams.map(team => 
        <SectionCardsTeam
          mudarCor={mudarCorDoTime}
          key={team.nome}
          title={team.nome} 

          cor={team.cor} 
          colaboradores={colaboradores.filter(colaborador => colaborador.time === team.nome)}
          aoDeletar={deletarColaborador}
        />
      )}

      <Footer/>
    </>
  );
}

export default App;
