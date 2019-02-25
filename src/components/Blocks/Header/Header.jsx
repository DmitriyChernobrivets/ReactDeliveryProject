import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

const HeaderComponents = () => (
  <header className="header">
    <div className="header-left">
      <Link to="/" className="logo">
        LOGO
      </Link>
    </div>
    <div className="header-right">
      <div className="header-auth">
        <Link to="/login" className="user-office">
          SignIn
        </Link>
        <Link to="/" className="user-bucket">
          Backet
        </Link>
      </div>
    </div>
  </header>
);

export default HeaderComponents;
