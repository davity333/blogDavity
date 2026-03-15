const projects = [
  {
    name: "IPA",
    desc: "Proyecto multidisciplinario Ideallij Idea. Aplicación colaborativa desarrollada en equipo.",
    tech: ["React", "Vite", "Tailwind"],
    url: "https://github.com/davity333/IPA",
    type: "Frontend",
  },
  {
    name: "Carniceria Noyola",
    desc: "Sistema para gestión de una carnicería. Control de inventario, ventas y clientes.",
    tech: ["Java", "MySQL", "API REST"],
    url: "https://github.com/davity333/Carniceria_noyola",
    type: "Full Stack",
  },
  {
    name: "Texas Chainsaw",
    desc: "Proyecto de aplicación con arquitectura limpia y separación de capas.",
    tech: ["Go", "Gin", "MySQL"],
    url: "https://github.com/davity333/TexasChainsaw",
    type: "Backend",
  },
  {
    name: "DenoliMX",
    desc: "Plataforma web para el mercado mexicano con diseño UX/UI enfocado al usuario.",
    tech: ["React", "TypeScript", "Tailwind"],
    url: "https://github.com/davity333/DenoliMX",
    type: "Frontend",
  },
  {
    name: "Frontend Lambi",
    desc: "Interfaz de usuario para aplicación de servicios, diseñada con enfoque UX/UI.",
    tech: ["React", "Vite", "CSS"],
    url: "https://github.com/davity333/frontend_Lambi",
    type: "Frontend",
  },
  {
    name: "Convertidor Binario",
    desc: "Herramienta web para conversión de números binarios, decimales y hexadecimales.",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://github.com/davity333/Convertidor-Binario",
    type: "Web Tool",
  },
  {
    name: "Estudiantes API REST",
    desc: "API REST para gestión de estudiantes con operaciones CRUD completas.",
    tech: ["Go", "net/http", "MySQL"],
    url: "https://github.com/davity333/estudiantesApiRest",
    type: "Backend",
  },
  {
    name: "IngeVity Front",
    desc: "Frontend para plataforma educativa de ingeniería. Diseño limpio y funcional.",
    tech: ["Angular", "TypeScript", "CSS"],
    url: "https://github.com/davity333/IngeVityFront",
    type: "Frontend",
  },
  {
    name: "Multi Cilantro Frontend",
    desc: "Interfaz para sistema de múltiples servicios con manejo de estado avanzado.",
    tech: ["React", "Vite", "Tailwind"],
    url: "https://github.com/davity333/frontend_multi_cilantro",
    type: "Frontend",
  },
  {
    name: "El EstudiHambre",
    desc: "App de delivery para estudiantes con catálogo de comida y pedidos en línea.",
    tech: ["Kotlin", "Jetpack Compose", "Retrofit"],
    url: "https://github.com/davity333/El-EstudiHambre",
    type: "Android",
  },
  {
    name: "Ahorcado Móvil",
    desc: "Juego del ahorcado para Android con diseño Material 3 y lógica de juego completa.",
    tech: ["Kotlin", "Jetpack Compose", "Material 3"],
    url: "https://github.com/davity333/ahorcadoMovil",
    type: "Android",
  },
  {
    name: "Maestrías Software",
    desc: "Sistema de información para gestión de maestrías en ingeniería de software.",
    tech: ["React", "Go", "MySQL"],
    url: "https://github.com/davity333/maestriasSoftware",
    type: "Full Stack",
  },
  {
    name: "Código Individual",
    desc: "Repositorio de ejercicios y proyectos individuales de práctica técnica.",
    tech: ["JavaScript", "Python", "Go"],
    url: "https://github.com/davity333/codigoIndividual",
    type: "Varios",
  },
];

const typeColors = {
  Frontend: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  Backend: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  "Full Stack": "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  Android: "text-green-400 bg-green-500/10 border-green-500/20",
  "Web Tool": "text-amber-400 bg-amber-500/10 border-amber-500/20",
  Varios: "text-pink-400 bg-pink-500/10 border-pink-500/20",
};

export default function Proyectos() {
  return (
    <section id="proyectos" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="text-cyan-400 font-mono text-sm tracking-widest mb-2">// work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Proyectos</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-950 border border-gray-800 hover:border-cyan-500/40 rounded-xl p-5 flex flex-col transition-all duration-200 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-cyan-400">
                  <path d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                </svg>
                <span className={`text-xs font-mono px-2 py-0.5 rounded border ${typeColors[p.type] || typeColors["Varios"]}`}>
                  {p.type}
                </span>
              </div>

              <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                {p.name}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">{p.desc}</p>

              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs font-mono text-gray-500 bg-gray-800/60 px-2 py-0.5 rounded">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-1 text-xs font-mono text-gray-500 group-hover:text-cyan-400 transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                ver en github →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}