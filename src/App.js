import "./App.css";
import Inicio from "./Screens/Inicio";
import Destino from "./Screens/Destinos";
import Hoteles from "./Screens/Hoteles";
import CentroAyuda from "./Screens/CentroAyuda";
import Contacto from "./Screens/Contacto";
import Navbar from "./Components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Inicio />
      <Destino />
      <Hoteles />
      <CentroAyuda />
      <Contacto />
    </div>
  );
}

export default App;
