import { useState } from 'react';
import { eventos } from '../data/eventos';

export default function Eventos() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="pt-24 pb-16 px-4 bg-blue-900 text-white min-h-screen">
      <h2 className="text-4xl font-bold mb-12 text-center">Próximos Eventos</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventos.map((evt) => (
          <div
            key={evt.id}
            className="relative bg-white/10 backdrop-blur-lg rounded-xl p-6 border-2 border-white/20 transition-all hover:scale-105 hover:bg-white/15 overflow-hidden"
            onMouseEnter={() => setHovered(evt.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
                hovered === evt.id ? 'opacity-30' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url(${evt.image})` }}
            />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-yellow-400 mb-3">{evt.name}</h3>
              <p className="text-teal-300 font-bold text-lg mb-3">📅 {evt.date}</p>
              <p className="leading-relaxed">{evt.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
