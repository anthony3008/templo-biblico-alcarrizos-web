import { historyPhotos } from '../data/historyPhotos';

export default function Nosotros() {
  return (
    <div className="pt-24 pb-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">Nuestra Historia</h2>

      <div className="prose max-w-none mb-12">
        <p className="text-lg mb-4 text-justify leading-relaxed">
          El Templo Bíblico Los Alcarrizos nace del corazón de Dios y del deseo ardiente de un grupo de creyentes comprometidos con la expansión del Reino de los Cielos. Fundada hace más de dos décadas, nuestra iglesia ha sido testigo del poder transformador del Evangelio en innumerables vidas.
Desde nuestros humildes comienzos en un pequeño local, donde un puñado de hermanos se reunía para adorar y estudiar la Palabra, hemos crecido hasta convertirnos en una comunidad vibrante y diversa. Cada domingo, nuestras puertas se abren para recibir a familias, jóvenes, niños y adultos mayores que buscan un encuentro genuino con Dios.
        </p>
        <p className="text-lg mb-4 text-justify leading-relaxed">
          A lo largo de los años, hemos sido fieles a nuestra misión: predicar el evangelio puro de Jesucristo, discipular a los creyentes y servir a nuestra comunidad con amor. Hemos visto cómo Dios ha restaurado matrimonios, sanado enfermos, liberado cautivos y dado esperanza a los quebrantados de corazón.

Nuestra visión es clara: ser una iglesia que impacte a Los Alcarrizos y más allá con el mensaje de salvación. Creemos en una iglesia activa, comprometida con la adoración genuina, la enseñanza bíblica sólida, la comunión fraternal y el servicio desinteresado. No somos perfectos, pero estamos en constante crecimiento, siempre buscando ser más como Cristo.

Hoy, bajo el liderazgo del Pastor Angel Joel Soriano Benítez y el Pastor Mayobanes Pascual, continuamos escribiendo nuestra historia, una historia de fe, esperanza y amor. Una historia que te invitamos a ser parte de ella.
        </p>
      </div>

      {/* Galería de fotos */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
        {historyPhotos.map((photo, idx) => (
          <div key={idx} className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <img src={photo} alt={`Historia ${idx + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
