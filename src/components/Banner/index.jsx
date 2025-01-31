import React from "react";
import "./styles.css";
import Banner from "../../assets/img/banner.png";
import LogoCliente from "../../assets/img/logo-cliente.png";

export default function Fundo() {
  return (
    <div className="fundo-container">
      <img src={Banner} className="fundo-da-pagina" alt="Banner" />
      <div className="container-logo">
        <img src={LogoCliente} className="logo-do-cliente" alt="Logo Cliente" />
        <p className="descricao">Apartamento 405, Bloco A</p>
      </div>
    </div>
  );
}
