import { motion } from "framer-motion";
import { ImBooks } from "react-icons/im";
import { FaChalkboardTeacher, FaUsers, FaLaptopCode, FaRocket } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden"
    >
      {/* Decoraciones luminosas */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-cyan-400 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-400 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">

        {/* TÍTULO */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-5xl font-extrabold mb-6 leading-tight">
            Impulsa tu <br />
            <span className="text-cyan-300">futuro profesional</span>
          </h2>
          <p className="text-blue-100 text-lg">
            Aprende habilidades reales con cursos diseñados para el mundo actual.
          </p>
        </motion.div>

        {/* CONTENIDO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* TEXTO */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Educación moderna, clara y práctica
            </h3>

            <p className="text-blue-100 mb-6 leading-relaxed">
              En <span className="text-cyan-300 font-semibold">BARG Cursos</span>,
              ayudamos a estudiantes y profesionales a desarrollar competencias
              tecnológicas con impacto real en su carrera.
            </p>

            <p className="text-blue-100 mb-10 leading-relaxed">
              Nuestra metodología está enfocada en la práctica, proyectos reales
              y acompañamiento constante por expertos de la industria.
            </p>

            {/* MÉTRICAS */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { num: "+10K", text: "Estudiantes activos" },
                { num: "+50", text: "Cursos especializados" },
                { num: "+20", text: "Instructores expertos" },
                { num: "100%", text: "Aprendizaje práctico" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <h4 className="text-4xl font-extrabold text-cyan-300">
                    {item.num}
                  </h4>
                  <p className="text-blue-200 text-sm">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                icon: <ImBooks />,
                title: "Contenido Actualizado",
                text: "Cursos alineados con las últimas tendencias."
              },
              {
                icon: <FaChalkboardTeacher />,
                title: "Expertos en la Industria",
                text: "Mentores con experiencia real."
              },
              {
                icon: <FaLaptopCode />,
                title: "Aprende Haciendo",
                text: "Proyectos prácticos desde el inicio."
              },
              {
                icon: <FaRocket />,
                title: "Impulsa tu Carrera",
                text: "Prepárate para mejores oportunidades."
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.15 }}
                className="bg-white/15 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-lg cursor-pointer"
              >
                <div className="text-4xl text-cyan-300 mb-4">
                  {card.icon}
                </div>
                <h4 className="font-bold text-xl mb-2">{card.title}</h4>
                <p className="text-blue-100 text-sm">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center mt-24"
        >
          <a
            href="/cursos"
            className="inline-block bg-cyan-400 text-blue-900 px-14 py-4 rounded-full text-lg font-bold hover:scale-110 transition"
          >
            Comenzar ahora 🚀
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
