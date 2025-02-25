import React from "react";
import "./VideoCard.css";

function VideoCard({url, title}) {
  function clickVideo() {
    alert("Em breve...");
  }

  return (
            <div className="video-card" onClick={clickVideo}>
              <img
                src={url}
                alt="Como Criar Componentes no React: Passo a Passo para Iniciantes"
              />
              <h3>
              {title}
              </h3>
            </div>
  );
}

export default VideoCard;
