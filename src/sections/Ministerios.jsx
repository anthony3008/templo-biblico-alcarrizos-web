
import { useState } from 'react';
import { ministerios } from '../data/ministerios';

export default function Ministerios() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="pt-24 pb-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Nuestros Ministerios</h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ministerios.map((min) => (
          <div
            key={min.id}
            className="relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all p-6 border-l-4 border-teal-400 overflow-hidden"
            onMouseEnter={() => setHovered(min.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
                hovered === min.id ? 'opacity-20' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url(${min.image})` }}
            />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">{min.name}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{min.desc}</p>
              <p className="text-red-600 font-bold text-sm">Líder: {min.leader}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
