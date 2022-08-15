import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './Components/Create';
import Read from './Components/Read'
import Update from './Components/Update'
import Inicio from './Components/Inicio'


function App() {
  return (

    <div className='fondo'>
      <h2 className="titulo" >Compumundo Hiper Mega Red</h2>
      <div className='menu'>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Inicio />} />
          </Routes>
          <Routes>
            <Route exact path="/Create" element={<Create />} />
          </Routes>
          <Routes>
            <Route exact path="/Read" element={<Read />} />
          </Routes>
          <Routes>
            <Route exact path="/Update" element={<Update />} />
          </Routes>

        </BrowserRouter>
      </div>

    </div>



  );

}

export default App;
