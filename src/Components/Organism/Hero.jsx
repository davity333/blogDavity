export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-950"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-cyan-400 font-mono text-sm tracking-[0.3em] mb-4 opacity-80">
          &gt; Hola, soy
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
          David Reynold
          <br />
          <span className="text-cyan-400">Guzmán Castro</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-3 font-light">
          Software Engineer · Frontend &amp; UX/UI Designer
        </p>
        <p className="text-gray-500 mb-10 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          Estudiante de Ingeniería en Software · Universidad Politécnica de Chiapas.
          Especializado en diseño de interfaces, experiencia de usuario y desarrollo full-stack.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => document.querySelector("#proyectos").scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-mono font-semibold text-sm rounded transition-colors duration-200"
          >
            Ver proyectos
          </button>
          <a
            href="https://github.com/davity333"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-cyan-500/40 hover:border-cyan-400 text-cyan-400 font-mono text-sm rounded transition-colors duration-200"
          >
            GitHub
          </a>
          <button
            onClick={() => document.querySelector("#contacto").scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 border border-gray-700 hover:border-gray-500 text-gray-400 hover:text-white font-mono text-sm rounded transition-colors duration-200"
          >
            Contacto
          </button>
        </div>
      </div>
    </section>
  );
}