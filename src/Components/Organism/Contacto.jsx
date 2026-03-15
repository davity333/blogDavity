import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_gongn2h";
const EMAILJS_TEMPLATE_ID = "template_blpupk5";
const EMAILJS_PUBLIC_KEY = "cpUE_cGQAb7yqzaLyFGKf";

export default function Contacto() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ from_name: "", from_email: "", message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.from_name || !form.from_email || !form.message) return;
    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ from_name: "", from_email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="text-cyan-400 font-mono text-sm tracking-widest mb-2">// contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Contacto</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              ¿Tienes un proyecto en mente o quieres hablar? No dudes en escribirme, respondo rápido.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:reyguz421@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-800 group-hover:bg-cyan-500/10 flex items-center justify-center transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                    <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <span className="font-mono text-sm">reyguz421@gmail.com</span>
              </a>

              <a
                href="tel:9711084722"
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-800 group-hover:bg-cyan-500/10 flex items-center justify-center transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                    <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <span className="font-mono text-sm">971 108 4722</span>
              </a>

              <a
                href="https://www.linkedin.com/in/david-reynold-guzman-castro-b1000a2a1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-800 group-hover:bg-cyan-500/10 flex items-center justify-center transition-colors">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-400">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <span className="font-mono text-sm">LinkedIn</span>
              </a>

              <a
                href="https://github.com/davity333"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-800 group-hover:bg-cyan-500/10 flex items-center justify-center transition-colors">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </div>
                <span className="font-mono text-sm">@davity333</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-gray-400 mb-1.5">Tu nombre</label>
              <input
                type="text"
                name="from_name"
                value={form.from_name}
                onChange={handleChange}
                placeholder="Juan Pérez"
                required
                className="w-full bg-gray-900 border border-gray-700 focus:border-cyan-500 text-white text-sm font-mono rounded-lg px-4 py-3 outline-none transition-colors placeholder-gray-600"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-gray-400 mb-1.5">Tu correo</label>
              <input
                type="email"
                name="from_email"
                value={form.from_email}
                onChange={handleChange}
                placeholder="juan@ejemplo.com"
                required
                className="w-full bg-gray-900 border border-gray-700 focus:border-cyan-500 text-white text-sm font-mono rounded-lg px-4 py-3 outline-none transition-colors placeholder-gray-600"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-gray-400 mb-1.5">Mensaje</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Hola David, me gustaría..."
                required
                rows={5}
                className="w-full bg-gray-900 border border-gray-700 focus:border-cyan-500 text-white text-sm font-mono rounded-lg px-4 py-3 outline-none transition-colors placeholder-gray-600 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 disabled:bg-cyan-800 text-gray-950 font-mono font-semibold text-sm rounded-lg transition-colors duration-200"
            >
              {status === "sending" ? "Enviando..." : "Enviar mensaje →"}
            </button>

            {status === "success" && (
              <p className="text-emerald-400 text-sm font-mono text-center">
                ✓ Mensaje enviado correctamente
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm font-mono text-center">
                ✗ Error al enviar. Escríbeme a reyguz421@gmail.com
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}