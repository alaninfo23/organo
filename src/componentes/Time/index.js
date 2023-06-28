import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
  const css = { backgroundColor: props.corSecundaria };

  return props.colaboradores.length > 0 ? (
    <section data-testid="TIME_ADD" className="time" style={css}>
      <h3
        data-testid={`TIME_ADD_${props.nome}`}
        style={{ borderColor: props.corPrimaria }}
      >
        {props.nome}
      </h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => (
          <Colaborador
            corDeFundo={props.corPrimaria}
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
            linkedin={colaborador.linkedin}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Time;
