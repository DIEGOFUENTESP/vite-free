import '../estilos/App.css';
import Boton from '../Componentes/boton';
import Contador from '../Componentes/Contador';
import freeCodeCampLogo from '../img/freecodecamp-logo.png';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const manejarDecremento = () => {
    // Asegurarse de que numClics no sea menor que cero
    setNumClics(prevNumClics => Math.max(prevNumClics - 1, 0));
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton         
          texto='Decrementar'
          esBotonDeClic={true}
          manejarClic={manejarDecremento} />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;