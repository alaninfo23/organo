import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      linkedin,
      time,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setLinkedin("");
    setTime("");
  };

  return (
    <section data-testid='FORMS_COLABORADOR' className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o user do github"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <CampoTexto
          label="Linkedin"
          placeholder="Digite o user do Linkedin"
          valor={linkedin}
          aoAlterado={(valor) => setLinkedin(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Times"
          itens={props.times}
          valor={time}
          placeholder="Selecione um time"
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao testId="BUTTON_CREATE_CARD">Criar card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
