import  "../index.css"

export function Hero() {
   
   return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          alt="Modern architectural sanctuary with dramatic lighting"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDznK7cVX01e_NojeMyOaHtz0726n9LxfbaFQcIRWm8Lt2vaagwXCPZmIfjbL42O0tLCGxjxBxioD78wMOxrYSnuKxcatlRKj1RtCbopRysWO5XPpBR1yThRtmIKqom_hGC1j6UTN_5HoTc4NPs0yma_hIDwMFFUZEefVJR9u7UViLZsHH6nKYbxf0FUXN3W1y4NLRELjqzGPKSIurGkCzKmd4mPPHnTSO3GAlidijmJEFZkgsaZileznsy38mpWCzaNJCp56rbwP4"
        />
        {/* Asegúrate de tener definida la clase 'hero-gradient' en tu CSS global o Tailwind config */}
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <span className="text-white/80 uppercase tracking-[0.3em] font-label text-sm mb-6 block">
          Bienvenidos a Casa
        </span>
        
        <h1 className="text-5xl md:text-8xl font-extrabold text-white leading-tight tracking-tighter mb-8 font-headline">
          El Santuario de la <br />
          Esperanza
        </h1>

        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Un espacio diseñado para el encuentro, la paz y la transformación
          espiritual en el corazón de la ciudad.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button 
            className="bg-white text-primary px-8 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-transform"
            onClick={() => console.log('Planea tu visita clicked')}
          >
            Planea tu Visita
          </button>
          
          <button 
            className="border border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors"
            onClick={() => console.log('Ver en vivo clicked')}
          >
            Ver en Vivo
          </button>
        </div>
      </div>
    </section>
  );
}


export default Hero