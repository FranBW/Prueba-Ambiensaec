import './customcss/style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//importar nuestros componentes
import SelectCliente from './components/SelectCliente';
import CreateCliente from './components/CreateCliente';
import UpdateCliente from "./components/UpdateCliente";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <SelectCliente/> } />
          <Route path='/create' element={ <CreateCliente/> } />
          <Route path='/update/:id' element={ <UpdateCliente/> } />
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;