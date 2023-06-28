import './Botao.css'

const Botao = (props) => {
    return (
        <button className="botao" data-testid={props.testId}>
            {props.children}
        </button>
    )
}

export default Botao