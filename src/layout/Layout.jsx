import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <nav>Polinizadores de América: Mariposas. Inicio / Fichas / Creadoras</nav>
    <Outlet/>
    <footer>Mi footer. Proyecto creado en Factoría F5.</footer>
    </>
  )
}

export default Layout;