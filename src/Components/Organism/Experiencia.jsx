const experience = [
  {
    company: "Universidad Politécnica de Chiapas",
    role: "Estudiante de Ingeniería en Software",
    period: "2022 – Presente",
    items: [
      "Desarrollo de proyectos full stack con React, Go y Java",
      "Diseño UX/UI con Figma y Tailwind CSS",
      "Implementación de APIs REST y arquitecturas limpias",
      "Proyectos con Android (Kotlin, Jetpack Compose)",
      "Trabajo en equipo con metodologías ágiles",
    ],
  },
  {
    company: "Proyectos Personales",
    role: "Frontend Developer & UX/UI Designer",
    period: "2022 – Presente",
    items: [
      "Construcción de +13 repositorios públicos en GitHub",
      "Diseño e implementación de interfaces con React y Angular",
      "Integración de backends con Node.js, Go y Java",
      "Desarrollo de apps móviles Android con Kotlin",
      "Consumo de APIs externas con Retrofit y fetch",
    ],
  },
];

export default function Experiencia() {
  return (
    <section id="experiencia" className="py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="text-cyan-400 font-mono text-sm tracking-widest mb-2">// experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Experiencia</h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-800 md:left-1/2" />

          <div className="space-y-10">
            {experience.map((exp, i) => (
              <div
                key={exp.company}
                className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Dot */}
                <div className="absolute left-4 top-6 w-2 h-2 rounded-full bg-cyan-400 -translate-x-1/2 md:left-1/2 z-10" />

                {/* Spacer for timeline */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-white font-semibold">{exp.company}</h3>
                        <p className="text-cyan-400 text-sm font-mono">{exp.role}</p>
                      </div>
                      <span className="text-xs font-mono text-gray-500 bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {exp.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-cyan-500 mt-1 shrink-0">›</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}