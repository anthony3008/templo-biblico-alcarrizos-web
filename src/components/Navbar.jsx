import { Home, Users, Heart, Calendar, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ currentSection, setCurrentSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Función auxiliar para navegar y cerrar menú
  const handleNavigation = (sectionId) => {
    setCurrentSection(sectionId);
    setMobileMenuOpen(false);
  };

  const Logo = () => (
    <div 
      className="flex items-center gap-3 cursor-pointer" 
      onClick={() => handleNavigation('inicio')}
    >
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105 overflow-hidden bg-white">
        <img 
          src="/TBA.jpg" 
          alt="Logo Templo Bíblico" 
          className="w-full h-full object-contain p-1"
        />
      </div>
      <span className="hidden md:block text-white font-bold text-lg">Templo Bíblico Los Alcarrizos</span>
    </div>
  );

  const links = [
    { id: 'inicio', label: 'Inicio', icon: Home },
    { id: 'nosotros', label: 'Nosotros', icon: Users },
    { id: 'ministerios', label: 'Ministerios', icon: Heart },
    { id: 'eventos', label: 'Eventos', icon: Calendar },
    { id: 'contacto', label: 'Contacto', icon: Mail }
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-gradient-to-r from-blue-900 to-gray-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <Logo />

          {/* Menu Desktop */}
          <ul className="hidden md:flex gap-6">
            {links.map(item => (
              <li key={item.id}>
                <button
                  onClick={() => setCurrentSection(item.id)}
                  className="text-white px-4 py-2 rounded hover:bg-white/10 transition flex items-center gap-2"
                >
                  <item.icon size={18} />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Botón menú móvil */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Móvil */}
        {mobileMenuOpen && (
          <ul className="md:hidden pb-4 space-y-2">
            {links.map(item => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavigation(item.id)}
                  className="text-white w-full text-left px-4 py-2 rounded hover:bg-white/10 transition"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}