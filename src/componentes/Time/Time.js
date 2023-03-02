import Colaborador from '../Colaborador/Colaborador';
import './Time.css';

const Time = (props) => {

    const background = { backgroundColor: props.corSecundaria };
    const sublinhado = { borderColor : props.corPrimaria };
    
    return (
        //props.colaboradores.length > 0 && - maneira do REACT fazer renderizacao condicional
        (props.colaboradores.length > 0) && <section className='time' style={background}>
            <h3 style={sublinhado}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => {

                    console.log(<Colaborador 
                        corDeFundo={props.corPrimaria} 
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo} 
                        imagem={colaborador.imagem} 
                        key={colaborador.nome}
                        aoDeletar={props.aoDeletar} 
                    />)
                    return <Colaborador 
                        corDeFundo={props.corPrimaria} 
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