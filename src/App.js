import Galeria from "./componentes/Galeria/Galeria";
import Header from "./componentes/Header/Header";


function App() {
  const nombre = ["Juan", "Pablo", "Pedro"]


  return (
    <div>
       <Header/>
       <Galeria nombres={nombre}/>
    </div>
   
  
  );
}

export default App;
