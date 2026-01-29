import { useState } from 'react';
import Navbar from './components/Navbar';
import Inicio from './sections/Inicio';
import Nosotros from './sections/Nosotros';
import Ministerios from './sections/Ministerios';
import Eventos from './sections/Eventos';
import Contacto from './sections/Contacto';

function App() {
  // Estado principal que controla la navegación
  const [currentSection, setCurrentSection] = useState('inicio');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. Pasamos setCurrentSection al Navbar para que los botones funcionen */}
      <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
      
      {/* 2. Mostramos la sección activa según el estado */}
      <main>
        {currentSection === 'inicio' && <Inicio />}
        {currentSection === 'nosotros' && <Nosotros />}
        {currentSection === 'ministerios' && <Ministerios />}
        {currentSection === 'eventos' && <Eventos />}
        {currentSection === 'contacto' && <Contacto />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>© 2024 Templo Bíblico Los Alcarrizos. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;