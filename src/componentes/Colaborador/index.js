import "./Colaborador.css";

const Colaborador = ({ nome, imagem, cargo, corDeFundo, linkedin }) => {

  const linkedinLink = `https://www.linkedin.com/in/${linkedin}`;

  return (
    <div className="colaborador">
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={`https://github.com/${imagem}.png`} alt={nome} />
      </div>

      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
          <small>{linkedinLink}</small>
        </a>
      </div>
    </div>
  );
};

export default Colaborador;
