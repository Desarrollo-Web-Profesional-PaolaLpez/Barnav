import { AnimatePresence, motion } from "motion/react";
import { navbarLinks } from "../data/data";

const MenuResponsivo = ({ open }) => {
  const animacion = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
    transition: { duration: 0.3 },
  };

  return (
    <AnimatePresence mode="await">
      {open && (
        <motion.div
          {...animacion}
          className="md:hidden absolute top-24 left-0 w-full z-20"
        >
          <div className="bg-primary text-white rounded-xl mx-6 py-16">
            <ul className="flex flex-col items-center gap-12 text-2xl font-semibold uppercase">
              {navbarLinks.map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuResponsivo;
