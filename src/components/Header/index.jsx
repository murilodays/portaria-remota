import "../Header/styles.css";
import PLogo from "../../assets/img/portaria-logo.png";
import profile from "../../assets/img/profile.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <NavLink id="pageTitle" to="/">
        <img src={PLogo} className="portaria-logo" />
      </NavLink>
      <h3 className="meunome">Murilo</h3>
      <img src={profile} className="avatar" />
      <button className="btn-sair">Sair</button>
    </header>
  );
}
