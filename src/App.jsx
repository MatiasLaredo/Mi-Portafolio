import Menu from "./Componentes/Menu";
import Inicio from "./Componentes/Inicio";
import Porfolio from "./Componentes/Porfolio";
import SobreMi from "./Componentes/SobreMi";
import Habilidades from "./Componentes/Habilidades";
import Educacion from "./Componentes/Educacion";
import Contacto from "./Componentes/Contacto";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";


function App() {
  return (
    <div>
      <Menu/>
      <div id="Inicio"><Inicio /></div>
      <div id="Porfolio"><Porfolio /></div>
      <div id="SobreMi"> <SobreMi /></div>
      <div id="Habilidades">  <Habilidades /></div>
      <div id="Educacion"><Educacion /></div>
      <div id="Contacto"> <Contacto /></div>
    </div>
  );
}

export default App;

