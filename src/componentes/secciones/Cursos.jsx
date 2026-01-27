import { motion } from "framer-motion";
import { ImBooks } from "react-icons/im";
import { FaReact, FaPaintBrush, FaMagic } from "react-icons/fa";

const cursos = [
  {
    id: 1,
    titulo: "React Profesional",
    descripcion:
      "Construye aplicaciones modernas con componentes, hooks y arquitectura escalable.",
    icon: <FaReact />,
    color: "from-cyan-400 to-blue-500",
  },
  {
    id: 2,
    titulo: "Tailwind CSS",
    descripcion:
      "Diseña interfaces modernas, rápidas y responsivas con utilidades profesionales.",
    icon: <FaPaintBrush />,
    color: "from-indigo-400 to-purple-500",
  },
  {
    id: 3,
    titulo: "Framer Motion",
    descripcion:
      "Crea animaciones fluidas, interactivas y atractivas para experiencias premium.",
    icon: <FaMagic />,
    color: "from-pink-400 to-purple-600",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const Cursos = () => {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Fondo animado tipo Banner */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 animate-gradient-x">
        <div className="absolute inset-0 bg-white/10 animate-pulse-slow"></div>
      </div>

      {/* Partículas flotantes */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white/20 rounded-full w-10 h-10 md:w-20 md:h-20 animate-float"
          style={{
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 90}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        ></div>
      ))}

      <div className="container mx-auto px-6 relative z-10 text-white">

        {/* Título */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
            Nuestros <span className="text-yellow-300">Cursos</span>
          </h1>
          <p className="text-lg text-gray-200">
            Formación diseñada para impulsar tu carrera con tecnología moderna.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cursos.map((curso, index) => (
            <motion.div
              key={curso.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 40px rgba(255,255,255,0.25)",
                y: -10,
              }}
              className="relative bg-white/15 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Glow superior */}
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${curso.color}`}
              />

              <div className="p-8 text-center">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                  }}
                  className="text-5xl mb-6 text-white drop-shadow-lg"
                >
                  {curso.icon}
                </motion.div>

                <h2 className="text-2xl font-bold mb-4">
                  {curso.titulo}
                </h2>

                <p className="text-gray-200 mb-8 text-sm leading-relaxed">
                  {curso.descripcion}
                </p>

                <button className="bg-yellow-300 text-blue-900 font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-yellow-400 hover:scale-105 transition">
                  Ver Curso
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Final */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-28"
        >
          <div className="flex justify-center text-8xl text-white/20 mb-6">
            <ImBooks className="animate-spin-slow" />
          </div>
          <h3 className="text-3xl font-bold mb-6">
            Empieza hoy a construir tu futuro 🚀
          </h3>
          <a
            href="/login"
            className="inline-block bg-purple-300 text-blue-900 px-14 py-4 rounded-full text-lg font-bold hover:scale-110 transition"
          >
            Inscribirme ahora
          </a>
        </motion.div>

      </div>

      {/* Animaciones reutilizadas del Banner */}
      <style>
        {`
          @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 12s ease infinite;
          }

          @keyframes pulse-slow {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.6; }
          }
          .animate-pulse-slow {
            animation: pulse-slow 4s ease-in-out infinite;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }

          .animate-spin-slow {
            animation: spin 20s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Cursos;
