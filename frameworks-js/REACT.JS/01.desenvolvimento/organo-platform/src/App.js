import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  adicionaNovoColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <>
      <Banner/>
      <Form 
        colaboradorCadastrados={colaborador => adicionaNovoColaborador(colaborador)}
      />
    </>
  );
}

export default App;
