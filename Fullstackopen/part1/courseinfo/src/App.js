
import './App.css';
import Description from './Description';  


const Mensaje = ()=>{
  return <h2>Hola mundo dice el componente mensaje</h2>
}


function App() {
  const mensaje ='Hola mundo desde variable'
  // entre llaves se puede evaluar
  //todo en jx hay que cerralo
  return (
    <div className="App">
      <h1>Titulo de la pagina</h1>
      <strong> Estamos trabajndo en ello</strong>
      <br/> 
      {mensaje} 
      <Mensaje/>
      <Mensaje/>
      <Mensaje/>
      <Description color="red" text="Camilo" />
      <Description color="blue" text="Andres" />
      <Description text="Rico" />
      <Description text="Asi se le pasan propiedades al componente, cual si fueran atributos en HTML" />
    </div>
  );
}

export default App;
