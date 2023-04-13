import { NavLink } from "react-router-dom";
import "./Header.scss";
import HeaderLogo from "../../assets/logo.png";

import { useContext } from "react";
import { LanguageSelector } from "../../App";
import { FormattedMessage } from "react-intl";

const Header = () => {
  const { setLanguage } = useContext(LanguageSelector);
  return (
    <div className="header">
      <div className="header__links">
        <div className="header__links-pages">
          <NavLink className="header__links-link" to="/">
            <img className="header__logo-image" src={HeaderLogo} />
          </NavLink>
          <div className="header__links--app">
            <NavLink className="header__links-link" to="/movie/:movieId">
              <FormattedMessage id="general:films" />
            </NavLink>
            <NavLink className="header__links-link" to="/game">
              <FormattedMessage id="header:game" />
            </NavLink>
          </div>
        </div>
        <div className="header__lang">
          <button onClick={() => setLanguage("es-ES")} className="btn--small header__lang-btn">
            ES
          </button>
          <button onClick={() => setLanguage("en-EN")} className="btn--small header__lang-btn">
            EN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
