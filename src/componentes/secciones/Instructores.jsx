import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const instructores = [
  {
    id: 1,
    nombre: "Ana Martínez",
    rol: "Frontend Developer",
    descripcion:
      "Especialista en React y desarrollo de interfaces modernas con enfoque profesional.",
    img: "https://i.pravatar.cc/300?img=47",
  },
  {
    id: 2,
    nombre: "Carlos Gómez",
    rol: "UI / UX Designer",
    descripcion:
      "Experto en experiencia de usuario y diseño visual aplicado a productos digitales.",
    img: "https://i.pravatar.cc/300?img=12",
  },
  {
    id: 3,
    nombre: "Laura Pérez",
    rol: "Motion Developer",
    descripcion:
      "Especialista en animaciones web elegantes y microinteracciones modernas.",
    img: "https://i.pravatar.cc/300?img=32",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Instructores = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">

      {/* Decoraciones luminosas (estáticas) */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-cyan-400 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-400 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Encabezado */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-5xl font-extrabold mb-6">
            Nuestros <span className="text-cyan-300">Instructores</span>
          </h1>
          <p className="text-blue-100 text-lg">
            Profesionales con experiencia real que te guiarán en tu formación.
          </p>
        </motion.div>

        {/* Cards de instructores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {instructores.map((inst, index) => (
            <motion.div
              key={inst.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-8 text-center"
            >
              {/* Avatar con animación sutil */}
              <motion.img
                src={inst.img}
                alt={inst.nombre}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="w-28 h-28 rounded-full mx-auto mb-6 border-4 border-cyan-300 object-cover"
              />

              <h2 className="text-2xl font-bold mb-1">
                {inst.nombre}
              </h2>
              <span className="text-cyan-300 text-sm font-semibold">
                {inst.rol}
              </span>

              <p className="text-blue-100 text-sm mt-4 leading-relaxed">
                {inst.descripcion}
              </p>

              {/* Redes */}
              <div className="flex justify-center gap-5 mt-6 text-xl text-blue-100">
                <a className="hover:text-cyan-300 transition cursor-pointer">
                  <FaLinkedin />
                </a>
                <a className="hover:text-cyan-300 transition cursor-pointer">
                  <FaGithub />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Instructores;
