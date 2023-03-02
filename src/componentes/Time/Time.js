import Colaborador from '../Colaborador/Colaborador';
import './Time.css';
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {

    const background = { backgroundColor: hexToRgba(props.cor, '0.3'), backgroundImage: 'url(/imagens/fundo.png)' };
    const sublinhado = { borderColor : props.cor };
    
    return (
        //props.colaboradores.length > 0 && - maneira do REACT fazer renderizacao condicional
        (props.colaboradores.length > 0) && 
        
        <section className='time' style={background}>
            <input type='color' className='input-cor' onChange={evento => props.mudarCor(evento.target.value, props.id)}/>
            <h3 style={sublinhado}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => {
                    return <Colaborador 
                        corDeFundo={props.cor} 
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo} 
                        imagem={colaborador.imagem} 
                        key={colaborador.nome}
                        aoDeletar={props.aoDeletar} 
                    />
                })}
            </div>   
        </section>
    )
}

export default Time;