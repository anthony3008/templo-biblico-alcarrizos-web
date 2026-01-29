import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });
  const [enviando, setEnviando] = useState(false);
  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setMensaje('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/luffygarcia1230@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono,
          mensaje: formData.mensaje,
          _subject: 'Nuevo mensaje desde la web del Templo Bíblico'
        })
      });

      if (response.ok) {
        setMensaje('¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.');
        setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
      } else {
        setMensaje('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.');
      }
    } catch (error) {
      setMensaje('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.');
    }

    setEnviando(false);
  };

  return (
    <div className="pt-24 pb-16 px-4 bg-gradient-to-br from-teal-400 to-blue-900 text-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Contáctanos</h2>

        {/* Teléfonos de Contacto */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-yellow-400 flex items-center gap-2">
            <Phone size={28} />
            Teléfonos de Contacto
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg">
              <Phone size={24} />
              <div>
                <div className="font-bold">Oficina Principal</div>
                <div className="text-lg">+1 (809) 555-1234</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg">
              <Phone size={24} />
              <div>
                <div className="font-bold">Pastoral</div>
                <div className="text-lg">+1 (809) 555-5678</div>
              </div>
            </div>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-yellow-400">Síguenos en Redes Sociales</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="https://facebook.com/TemploBiblicoLosAlcarrizos" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-3 bg-blue-600 p-4 rounded-lg hover:bg-blue-700 transition">
              <Facebook size={32} />
              <div>
                <div className="font-bold">Facebook</div>
                <div className="text-sm">Templo Bíblico</div>
              </div>
            </a>
            <a href="https://instagram.com/Tbalcarrizos" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-3 bg-pink-600 p-4 rounded-lg hover:bg-pink-700 transition">
              <Instagram size={32} />
              <div>
                <div className="font-bold">Instagram</div>
                <div className="text-sm">@Tbalcarrizos</div>
              </div>
            </a>
            <a href="https://youtube.com/@TemploBiblicoLosAlcarrizos" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-3 bg-red-600 p-4 rounded-lg hover:bg-red-700 transition">
              <Youtube size={32} />
              <div>
                <div className="font-bold">YouTube</div>
                <div className="text-sm">Canal Oficial</div>
              </div>
            </a>
          </div>
        </div>

        {/* Ubicación */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-yellow-400 flex items-center gap-2">
            <MapPin size={28} />
            Nuestra Ubicación
          </h3>
          <p className="text-lg mb-4">Calle Primera #3, Los Alcarrizos, Santo Domingo, Rep. Dom.</p>
          <div className="rounded-lg overflow-hidden shadow-xl bg-gray-300">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.568461758498!2d-70.0135!3d18.5145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMwJzUyLjIiTiA3MMKwMDAnNDguNiJX!5e0!3m2!1ses!2sdo!4v1600000000000!5m2!1ses!2sdo"
              width="100%" 
              height="300" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy"
              title="Mapa Ubicación"
            ></iframe>
          </div>
        </div>

        {/* Formulario de Contacto */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-yellow-400 flex items-center gap-2">
            <Mail size={28} />
            Envíanos un Mensaje
          </h3>
          
          {mensaje && (
            <div className={`mb-6 p-4 rounded-lg ${mensaje.includes('exitosamente') ? 'bg-green-500/20 border border-green-500' : 'bg-red-500/20 border border-red-500'}`}>
              {mensaje}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nombre" className="block text-sm font-bold mb-2">Nombre Completo</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Tu nombre completo"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold mb-2">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="telefono" className="block text-sm font-bold mb-2">Teléfono</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="(809) 555-1234"
              />
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-bold mb-2">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={enviando}
              className="w-full bg-yellow-400 text-blue-900 font-bold py-3 px-6 rounded-lg hover:bg-yellow-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {enviando ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}