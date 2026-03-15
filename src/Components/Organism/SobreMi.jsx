import foto from "../../../public/foto.png";

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="text-cyan-400 font-mono text-sm tracking-widest mb-2">// about me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Sobre mí</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Text */}
          <div className="md:col-span-1">
            <p className="text-gray-300 leading-relaxed mb-4">
              Soy estudiante de <span className="text-cyan-400 font-semibold">Ingeniería en Software</span> en
              la Universidad Politécnica de Chiapas, con enfoque en diseño frontend y experiencia de
              usuario (UX/UI).
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Me apasiona crear interfaces funcionales y atractivas con React y Angular, y diseñar
              flujos de usuario con Figma. También tengo experiencia en desarrollo backend con Go y Java,
              así como en arquitecturas limpias y APIs REST.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm">
              Actualmente en búsqueda de oportunidades para crecer profesionalmente, colaborar en
              proyectos reales y seguir aprendiendo en equipos ágiles.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://github.com/davity333"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm font-mono rounded transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/david-reynold-guzman-castro-b1000a2a1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm font-mono rounded transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-blue-400">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Foto circular */}
          <div className="flex justify-center md:col-span-1">
            <div className="relative">
              {/* Anillo decorativo exterior */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 blur-sm opacity-40 scale-105" />
              {/* Anillo sólido */}
              <div className="relative rounded-full p-1 bg-gradient-to-br from-cyan-400 to-cyan-700">
                <img
                  src={foto}
                  alt="David Reynold Guzmán Castro"
                  className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover block"
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 md:col-span-1">
            {[
              { label: "Proyectos en GitHub", value: "13+" },
              { label: "Lenguajes", value: "7+" },
              { label: "Frameworks", value: "10+" },
              { label: "Arquitecturas", value: "7+" },
            ].map((stat) => (
              <div key={stat.label} className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-cyan-400 mb-1">{stat.value}</p>
                <p className="text-gray-400 text-xs font-mono">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}