import Colaborador from '../Colaborador/Colaborador';
import './Time.css';

const Time = (props) => {

    const background = { backgroundColor: props.corSecundaria };
    const sublinhado = { borderColor : props.corPrimaria };
    
    return (
        <section className='time' style={background}>
            <h3 style={sublinhado}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} key={colaborador.nome} />)}
            </div>   
        </section>
    )
}

export default Time;