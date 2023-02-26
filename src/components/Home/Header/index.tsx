import { HeaderTag } from "./style";
import logo from "../../../assets/logo.png";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <HeaderTag>
      <img src={logo} alt="logo tutor mundi" />

      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>

      <ul className="menu">
        <li>Quem Somos</li>
        <li>Para Escolas</li>
        <li>Conteúdo</li>
        <li>Seja um Tutor</li>
      </ul>
      <button>LOGIN</button>
    </HeaderTag>
  );
};

export default Header;
