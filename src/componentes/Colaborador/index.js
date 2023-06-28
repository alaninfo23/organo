import "./Colaborador.css";

const Colaborador = ({ nome, imagem, cargo, corDeFundo, linkedin }) => {

  const linkedinLink = `https://www.linkedin.com/in/${linkedin}`;

  return (
    <div data-testid={`COLABORADOR_NOME_${nome}`} className="colaborador">
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img data-testid={`COLABORADOR_IMAGEM_${imagem}`} src={`https://github.com/${imagem}.png`} alt={nome} />
      </div>

      <div className="rodape">
        <h4>{nome}</h4>
        <h5 data-testid={`COLABORADOR_CARGO_${cargo}`}>{cargo}</h5>
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
        <small data-testid={`COLABORADOR_LINKEDIN_${linkedinLink}`}>{linkedinLink}</small>
        </a>
      </div>
    </div>
  );
};

export default Colaborador;
