import React from "react";
import "./PaginaInicial.css";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import Banner from "../../components/Banner/index";
import UserPlus from "../../assets/img/user-plus.png";
import { NavLink } from "react-router-dom";

function PaginaInicial() {
  return (
    <>
      <Header />
      <Banner />

      <div className="container-visitas">
        <div className="topo-do-container">
          <h2>Gerencie as suas visitas</h2>
          <button>
            <NavLink id="PaginaVisita" to="/adicionar-visita">
              Adicionar nova visita
              <img src={UserPlus} className="icon-user-plus" />
            </NavLink>
          </button>
        </div>
        <div className="infos-container">
          <p className="visitante">VISITANTE</p>
          <p className="data-visitante">DATA</p>
          <p className="hora-visitante">HORA</p>
          <p className="status-visitante">STATUS</p>
        </div>
        <div className="conteudo-container"></div>
        <div className="next-page">
          <button className="pag-ant">Anterior</button>
          <button className="quant-pag">1</button>
          <button className="prox-pag">Próximo</button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default PaginaInicial;
