import React from "react";
import "./SidebarItem.css";

function SidebarItem(props) {
  function clickItem() {
    alert("Em breve...");
  }

  return (
    <li className="sidebar-item" onClick={clickItem} title={props.subtitulo}>
      {props.texto}
    </li>
  );
}

export default SidebarItem;
