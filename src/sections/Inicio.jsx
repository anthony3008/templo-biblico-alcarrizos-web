import { useState, useEffect } from 'react';
import { CarouselImages } from '../data/carouselImages';

export default function Inicio() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Cambia la imagen cada 5 segundos basándose en la longitud del array
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CarouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-16">
      {/* Carrusel */}
      <div className="relative h-96 md:h-[600px] overflow-hidden">
        {CarouselImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === idx ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
              <div>
                {/* Textos dinámicos según el índice de la imagen */}
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {idx === 0 && 'Bienvenidos'}
                  {idx === 1 && 'Una Casa de Oración'}
                  {idx === 2 && 'Comunidad de Fe'}
                </h1>
                <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                  {idx === 0 && 'Templo Bíblico Los Alcarrizos'}
                  {idx === 1 && 'Donde la Palabra de Dios es nuestra guía'}
                  {idx === 2 && 'Unidos para servir y adorar'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Versículo Lema */}
      <div className="bg-gradient-to-r from-blue-900 to-teal-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestro Lema</h2>
          <p className="text-xl md:text-2xl italic leading-relaxed mb-4">
            "Tomó luego Samuel una piedra y la puso entre Mizpa y Sen, y le puso por nombre Eben-ezer, diciendo: Hasta aquí nos ayudó Jehová."
          </p>
          <p className="text-lg font-semibold">1 Samuel 7:12</p>
        </div>
      </div>

      {/* Nuestros Pastores */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 text-center">Nuestros Pastores</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Conoce a los líderes espirituales que Dios ha puesto al frente de nuestra congregación, 
          siervos comprometidos con la enseñanza de Su Palabra y el cuidado del rebaño.
        </p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Pastor Ángel Joel Soriano */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="h-80 overflow-hidden">
              <img 
                src="./pastor joel.jpg" 
                alt="Pastor Ángel Joel Soriano"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Pastor Ángel Joel Soriano</h3>
              <p className="text-gray-700 leading-relaxed">
                Siervo de Dios con un corazón apasionado por la predicación de la Palabra y el discipulado. 
                Con años de experiencia en el ministerio, el Pastor Ángel guía a la congregación con sabiduría 
                y amor, siendo ejemplo de fe y dedicación al servicio del Reino de Dios.
              </p>
            </div>
          </div>

          {/* Pastor Mayovanex Pascual */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="h-80 overflow-hidden">
              <img 
                src="./pastor mayo.jpeg" 
                alt="Pastor Mayovanex Pascual"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Pastor Mayovanex Pascual</h3>
              <p className="text-gray-700 leading-relaxed">
                Hombre de oración y enseñanza fiel de las Escrituras. El Pastor Mayovanex trabaja 
                incansablemente por el bienestar espiritual de cada miembro, pastoreando con amor y 
                compromiso. Su pasión por las almas y su entrega al ministerio son testimonio vivo 
                del amor de Cristo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}