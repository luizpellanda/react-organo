import './Rodape.css';

const Rodape = () => {
    return (
        <footer>
            <div className='imagens'>
                <a href='https://github.com/luizpellanda'><img src='../../imagens/fb.png' alt=''/></a>
                <a href='https://github.com/luizpellanda'><img src='../../imagens/ig.png' alt=''/></a>
                <a href='https://github.com/luizpellanda'><img src='../../imagens/tw.png' alt=''/></a>              
            </div>
            <div className='logo'>
                <img src='../../imagens/logo.png' alt=''/>
            </div>
            <div className='alura'>
                <p>Desenvolvido por Alura.</p>
            </div>
        </footer>
    )
}

export default Rodape;