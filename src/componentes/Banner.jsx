import React, { useState, useEffect } from "react";
import { ImBooks } from "react-icons/im";
import { motion } from "framer-motion";

const Banner = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Aprende y Crece con BARG Cursos";

  // Animación de tipo “typing”
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden h-screen">

      {/* Fondo animado con gradiente y brillo */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 animate-gradient-x">
        <div className="absolute inset-0 bg-white/10 animate-pulse-slow"></div>
      </div>

      {/* Partículas flotantes */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className={`absolute bg-white/20 rounded-full w-12 h-12 md:w-24 md:h-24 animate-float`}
          style={{
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 90}%`,
            animationDelay: `${i * 0.4}s`,
          }}
        ></div>
      ))}

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 h-full px-6 md:px-0">

        {/* Texto principal */}
        <div className="md:w-1/2 mb-12 md:mb-0 flex flex-col justify-center h-full">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg"
          >
            {typedText}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-xl mb-8 text-gray-200 drop-shadow-md"
          >
            Explora nuestros cursos y domina nuevas habilidades para tu futuro profesional.
          </motion.p>

          {/* Botón animado tipo neón */}
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 30px #FACC15, 0 0 60px #FACC15",
              y: -5,
            }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ y: { repeat: Infinity, duration: 2, ease: "easeInOut" } }}
            className="bg-yellow-300 text-blue-900 font-bold px-10 py-4 rounded-lg shadow-lg transition-all duration-300 hover:bg-yellow-400"
          >
            Ver Cursos
          </motion.button>
        </div>

        {/* Iconos animados flotando */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="md:w-1/2 flex justify-center relative text-9xl text-white/20"
        >
          <ImBooks className="animate-spin-slow absolute" />
          <ImBooks className="animate-bounce-slow absolute top-10 left-10" />
          <ImBooks className="animate-ping absolute top-20 right-10" />
        </motion.div>
      </div>

      {/* Estilos de animaciones */}
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
          .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          .animate-float { animation: float 6s ease-in-out infinite; }

          .animate-spin-slow { animation: spin 20s linear infinite; }
          .animate-bounce-slow { animation: bounce 4s infinite; }
        `}
      </style>
    </section>
  );
};

export default Banner;
