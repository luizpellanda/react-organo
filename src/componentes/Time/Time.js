import './Time.css';

const Time = (props) => {

    const background = { backgroundColor: props.corSecundaria };
    const sublinhado = { borderColor : props.corPrimaria };
    
    return (
        <section className='time' style={background}>
            <h3 style={sublinhado}>{props.nome}</h3>
        </section>
    )
}

export default Time;