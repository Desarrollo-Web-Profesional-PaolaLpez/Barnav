import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const faqs = [
  {
    pregunta: "¿Cómo puedo inscribirme en un curso?",
    respuesta:
      "Puedes inscribirte creando una cuenta y seleccionando el curso de tu interés desde la sección de Cursos.",
  },
  {
    pregunta: "¿Los cursos tienen certificación?",
    respuesta:
      "Sí, al finalizar cada curso obtendrás un certificado digital que avala tus conocimientos.",
  },
  {
    pregunta: "¿Puedo aprender a mi propio ritmo?",
    respuesta:
      "Claro, todos nuestros cursos están diseñados para que avances a tu propio ritmo.",
  },
  {
    pregunta: "¿Qué métodos de pago aceptan?",
    respuesta:
      "Aceptamos tarjetas de crédito, débito y pagos electrónicos seguros.",
  },
];

const Contacto = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">

      {/* Decoraciones */}
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
            Contáctanos
          </h1>
          <p className="text-blue-100 text-lg">
            Estamos aquí para ayudarte. También puedes consultar nuestras preguntas frecuentes.
          </p>
        </motion.div>

        {/* Contacto + Formulario */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mb-28">

          {/* Información */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-8">
              Información de contacto
            </h2>

            <div className="space-y-6 text-blue-100">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-300 text-2xl" />
                <span>contacto@bargcursos.com</span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-cyan-300 text-2xl" />
                <span>+52 55 1234 5678</span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-cyan-300 text-2xl" />
                <span>Ciudad de México, México</span>
              </div>
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-8"
          >
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Nombre completo
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:ring-2 focus:ring-cyan-300 outline-none"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:ring-2 focus:ring-cyan-300 outline-none"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Mensaje
              </label>
              <textarea
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:ring-2 focus:ring-cyan-300 outline-none resize-none"
              ></textarea>
            </div>

            <button className="w-full bg-cyan-400 text-blue-900 font-bold py-3 rounded-lg hover:scale-105 transition">
              Enviar mensaje
            </button>
          </motion.form>
        </div>

        {/* FAQ */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-14">
            Preguntas Frecuentes
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/15 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-blue-100 hover:bg-white/10 transition"
                >
                  {faq.pregunta}
                  <FaChevronDown
                    className={`transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-5 text-blue-200 text-sm leading-relaxed">
                    {faq.respuesta}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contacto;
