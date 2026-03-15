const posts = [
  {
    title: "Desplegando tu primera instancia en AWS EC2",
    summary:
      "Guía paso a paso para lanzar una instancia EC2 en Amazon Web Services: elección de AMI, tipos de instancia, grupos de seguridad y conexión por SSH.",
    tags: ["AWS", "EC2", "Cloud", "DevOps"],
    readTime: "8 min",
    date: "Mar 2025",
    emoji: "☁️",
  },
  {
    title: "Almacenamiento de imágenes con S3 y Cloudinary en AWS",
    summary:
      "Comparativa entre S3 nativo y Cloudinary para almacenar y servir imágenes en producción. Integración con una API REST desde Node.js y Go.",
    tags: ["AWS", "S3", "Cloudinary", "Backend"],
    readTime: "6 min",
    date: "Feb 2025",
    emoji: "🖼️",
  },
  {
    title: "Escalado automático con AWS y buenas prácticas DevOps",
    summary:
      "Cómo configurar Auto Scaling Groups, balanceadores de carga y pipelines CI/CD básicos para mantener aplicaciones disponibles en la nube de AWS.",
    tags: ["AWS", "AutoScaling", "CI/CD", "DevOps"],
    readTime: "10 min",
    date: "Ene 2025",
    emoji: "⚡",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="text-cyan-400 font-mono text-sm tracking-widest mb-2">// blog técnico</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Tutoriales AWS</h2>
          <p className="text-gray-500 mt-3 text-sm max-w-xl mx-auto">
            Artículos técnicos sobre Amazon Web Services, DevOps y cloud computing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-gray-950 border border-gray-800 hover:border-cyan-500/30 rounded-xl p-6 flex flex-col transition-all duration-200 hover:-translate-y-1 cursor-pointer"
            >
              <div className="text-3xl mb-4">{post.emoji}</div>
              <div className="flex items-center gap-3 text-xs font-mono text-gray-500 mb-3">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime} lectura</span>
              </div>
              <h3 className="text-white font-semibold mb-3 leading-snug">{post.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">{post.summary}</p>
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}