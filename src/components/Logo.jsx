export default function Logo({ setCurrentSection }) {
  return (
    <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentSection('inicio')}>
      <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-teal-400 to-blue-900 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105">
        <span className="text-white text-xl font-bold">TB</span>
      </div>
      <span className="hidden md:block text-white font-bold text-lg">
        Templo Bíblico Los Alcarrizos
      </span>
    </div>
  );
}
