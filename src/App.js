import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import Rodape from './componentes/Rodape/Rodape';
import Time from './componentes/Time/Time';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      nome: 'Programação',
      cor: '#57c278',
      id: uuidv4()
    },
    {
      nome: 'Front-End',
      cor: '#82CFFA',
      id: uuidv4()
    },
    {
      nome: 'Data Science',
      cor: '#A6D157',
      id: uuidv4()
    },
    {
      nome: 'Devops',
      cor: '#E06B69',
      id: uuidv4()
    },
    {
      nome: 'UX e Design',
      cor: '#DB6EBF',
      id: uuidv4()
    },
    {
      nome: 'Mobile',
      cor: '#FFBA05',
      id: uuidv4()
    },
    {
      nome: 'Inovação e Gestão',
      cor: '#FF8A29',
      id: uuidv4()
    }
  ])

  const [colaboradores, setColaboradores] = useState([]);

  function aoNovoColaboradorAdicionado(colaborador) {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador (evento) {
    evento.target.parentElement.remove();
  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor
      }
      return time;
    }))
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, {...novoTime, id: uuidv4()}])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime} 
        times={times.map(time => time.nome)} 
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />
      {times.map((time) => {
        return <Time 
          id={time.id}
          mudarCor={mudarCorDoTime}
          key={time.nome} 
          nome={time.nome} 
          cor={time.cor}  
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
        />
      })}
      <Rodape />
    </div>
  );
}

export default App;
