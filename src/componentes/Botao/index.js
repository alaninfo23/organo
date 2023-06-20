import './Botao.css'

const Botao = (props) => {
    return (
        <button className="botao" data-testid={props["data-testid"]}>
            {props.children}
        </button>
    )
}

export default Botao