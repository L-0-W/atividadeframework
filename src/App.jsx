import React from "react";
import "./App.css";
import SidebarItem from "./components/SidebarItem/SidebarItem";
import TopBar from "./components/Topbar/TopBar";
import Footer from "./components/Footer/Footer";
import ContentHeader from "./components/ContentHeader/ContentHeader";
import VideoCard from "./components/VideoCard/VideoCard";

function App() {
  function clickVideo() {
    alert("Em breve...");
  }

  return (
    <div>
     <TopBar />

      <div className="container">
        <div className="sidebar">
          <ul>
            <SidebarItem
              texto="Início"
              subtitulo="Clique para ver os vídeos em destaque"
            />
            <SidebarItem texto="Sobre" subtitulo="Saiba mais" />
            <SidebarItem texto="Contato" subtitulo="Entre em contato conosco" />
          </ul>
        </div>

        <div className="content">
          <ContentHeader text="adasdkasdkaskdaskdaskdaskdaksdk"/>
	
          <div className="videos">
            <VideoCard url="https://picsum.photos/250/150?random=2" title="Como criar um Applicativo Full-Stack"/>
            <VideoCard url="https://picsum.photos/250/150?random=1" title="Como Criar Componentes no React: Passo a Passo para Iniciantes"/>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
