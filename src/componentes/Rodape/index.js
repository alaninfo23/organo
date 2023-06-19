import "./Rodape.css";

const Rodape = (props) => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href={`https://www.${props.link1}.com`} target="_blank">
              <img src="imagens/fb.png" alt="" />
            </a>
          </li>
          <li>
            <a href={`https://www.${props.link2}.com`} target="_blank">
              <img src="/imagens/instagram.png" alt="" />
            </a>
          </li>
          <li>
            <a href={`https://www.${props.link3}.com`} target="_blank">
              <img src="/imagens/lnkd.png" alt="" />
            </a>
          </li>
        </ul>
      </section>
      <section className="section-container">
        <div className="logo-container">
          <img src="/imagens/logo.png" alt="" />
          <a>Desenvolvido por Alan Santos</a>
        </div>
      </section>

      <section className="section-container">
        <p>
          <li>
            <a>Fale conosco</a>
            <a
              href={`https://wa.me/${props.telefone}?text=Ol%C3%A1%2C+gostaria+de+saber+mais...`}
              target="_blank"
            >
              <img src="imagens/whats.png" alt="" />
            </a>
          </li>
        </p>
      </section>
    </footer>
  );
};

export default Rodape;
