import { Routes, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Talleres from './pages/Talleres.jsx'
import Historias from './pages/Historias.jsx'
import Recursos from './pages/Recursos.jsx'
import Donar from './pages/Donar.jsx'
import Contacto from './pages/Contacto.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/talleres" element={<Talleres />} />
        <Route path="/historias" element={<Historias />} />
        <Route path="/recursos" element={<Recursos />} />
        <Route path="/donar" element={<Donar />} />
        <Route path="/contacto" element={<Contacto />} />
      </Route>
    </Routes>
  )
}
