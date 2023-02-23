import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import Time from './componentes/Time/Time';

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  function aoNovoColaboradorAdicionado(colaborador) {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      <Time nome='Programação' />
      <Time nome='Frontend' />
      <Time nome='Data Science' />
    </div>
  );
}

export default App;
