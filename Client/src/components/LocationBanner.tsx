export default function LocationBanner() { 
  return (
    <section className="py-24 px-8 bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <img
          className="w-full h-full object-cover"
          alt="Abstract world map background"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA59uCPOLGzzEcrxWEmJnz4GmppmRhNVfA_dgRL_wtBXJL-xXEGIJ33HzVP-o5hEuE0wQhayQRhzgOII0RKwd2iTSJNHlc5Z1pcBP3KP6AHhOvSVMghoZoeUihxLmTqKTfdpWpY21jKlOgi5YJSbY-CmhguPWyeJklPGUyvL-It-_2CnEKHRcYW3lsFquG1EGzdrqhRoNgDWjFPkec9orGCxlCzOBFJTfzTx6zYtD4UlZlmj7fZ4CClqOr2BI-xfGS299A8JITsLBU"
        />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight font-headline">
            Podemos estar en tu ubicación
          </h2>
          <p className="text-blue-100 text-lg mb-10 leading-relaxed">
            No importa dónde te encuentres, siempre hay un grupo cerca de ti.
            Nuestra misión es llevar el mensaje de esperanza a cada hogar.
          </p>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl flex items-center justify-between border border-white/20">
            <div>
              <p className="text-white text-xl font-bold mb-1">Encuentra una Célula</p>
              <p className="text-blue-100 text-sm">Más de 5,000 puntos de encuentro en la ciudad.</p>
            </div>
            <button className="bg-white text-primary px-6 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors">
              Buscar ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}