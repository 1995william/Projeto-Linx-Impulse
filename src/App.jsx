import { useState } from "react";
import "./App.css";
import AjudeAlgoritimo from "./components/AjudeAlgoritimo/AjudeAlgoritimo";
import Produtos from "./components/Produtos/Produtos";
import Compartilhe from "./components/Compartilhe/Compartilhe";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <AjudeAlgoritimo />
      <Produtos />
      {/* <Compartilhe />
      <Rodape /> */}
    </div>
  );
}

export default App;
