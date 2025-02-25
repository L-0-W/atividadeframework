import React from "react";
import "./topbar.css";

function TopBar(props) {
  return (
       <div className="topbar">
        <div className="site-name">PlayTube</div>
        <div className="links">
          <a href="#">Cadastrar</a>
          <a href="#">Logar</a>
        </div>
      </div>
  );
}

export default TopBar;
