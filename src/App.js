import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// import logo from './logo.svg';
// import './App.css';
import './styles/globals.css'
import Index from './pages/Index'
import Contacto from './pages/Contacto'

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
