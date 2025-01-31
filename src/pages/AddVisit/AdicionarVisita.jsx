import React from "react";
import "./AdicionarVisita.css";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import FotoBanner from "../../assets/img/banner.png";
import { ArrowUUpLeft } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import { User } from "@phosphor-icons/react";
import { Browsers } from "@phosphor-icons/react";

function AddVisita() {
  return (
    <>
      <Header />
      <img src={FotoBanner} className="foto-banner" />
      <NavLink id="pageTitle" to="/">
        <div className="container-voltar">
          <ArrowUUpLeft size={24} />
          <p>Voltar</p>
        </div>
      </NavLink>

      <div className="container-add-visitas">
        <div className="topo-do-container-add-visita">
          <h2>Adicionar nova visita</h2>
        </div>
        <div className="dados-visitante">
          <form>
            <div className="form-group">
              <label>Nome do visitante</label>
              <div className="input-with-icon">
                <User size={32} className="input-icon" />
                <input
                  type="text"
                  placeholder="Digite o nome do visitante"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Data</label>
              <input
                type="date"
                name="data"
                min="2000-12-31"
                max="2030-12-31"
                required
              />
            </div>

            <div className="form-group">
              <label>Hora</label>
              <input type="time" required />
            </div>

            <div className="form-group">
              <label>Tipo de documento</label>
              <div className="input-with-icon">
              <Browsers size={32} className="input-icon" />
              <input
                type="text"
                placeholder="Digite o tipo de documento"
                required
              />
              </div>
            </div>

            <div className="form-group">
              <label>Número do documento</label>
              <div className="input-with-icon">
              <Browsers size={32} className="input-icon" />
              <input
                type="text"
                placeholder="Digite o número do documento"
                required
              />
              </div>
            </div>

            <div className="form-group">
              <label>Observação (opcional)</label>
              <textarea placeholder="Digite a observação"></textarea>
            </div>

            <div className="buttons">
            <NavLink id="pageTitle" to="/">
              <button type="button" className="voltar-btn">
                Voltar
              </button>
              </NavLink>
              <button type="submit" className="salvar-btn">
                Salvar
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AddVisita;
