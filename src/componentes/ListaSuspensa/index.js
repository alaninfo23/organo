import "./ListaSuspensa.css";
const ListaSuspensa = (props) => {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select
        onChange={(evento) => props.aoAlterado(evento.target.value)}
        required={props.required}
        value={props.valor}
        data-testid="LISTA_SUSPENSA"
      >
        <option value="" disabled hidden>
          {props.placeholder}
        </option>
        {props.itens.map((item) => (
          <option data-testid={`LISTA_SUSPENSA_${item}`} key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
