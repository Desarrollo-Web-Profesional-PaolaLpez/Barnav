import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './componentes/Navbar'
import Banner from './componentes/Banner'
import Home from './componentes/secciones/Home'
import Cursos from './componentes/secciones/Cursos'
import About from './componentes/secciones/About'
import Instructores from './componentes/secciones/Instructores'
import Contacto from './componentes/secciones/Contacto'
import Login from './componentes/secciones/Login'

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Home />
              </>
            }
          />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/about" element={<About />} />
          <Route path="/instructores" element={<Instructores />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
