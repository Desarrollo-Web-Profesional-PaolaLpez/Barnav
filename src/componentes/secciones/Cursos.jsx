const Cursos = () => {
  return (
    <main className="min-h-screen py-20 bg-white">
      <h1 className="text-3xl font-bold mb-8">Nuestros Cursos</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container">
        <div className="p-6 shadow-lg rounded-xl bg-orange-50">Curso de React</div>
        <div className="p-6 shadow-lg rounded-xl bg-orange-50">Curso de Tailwind</div>
        <div className="p-6 shadow-lg rounded-xl bg-orange-50">
          Curso de Framer Motion
        </div>
      </div>
    </main>
  );
};

export default Cursos;
