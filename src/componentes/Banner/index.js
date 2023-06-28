import { Fragment } from "react";
import "./Banner.css";
function Banner() {
  return (
    <>
      <header data-testid='BANNER_TOP' className="banner">
        <img
          src='/imagens/banner.png'
          alt="O banner principal da página do Organo"
        />
      </header>
    </>
  );
}

export default Banner;
