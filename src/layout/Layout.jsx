import { Outlet } from "react-router-dom"; {/*React Router component that renders the current page content */ }
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Layout.css";

{/**Creates the Layout component using arrow function syntax */}
const Layout = () => { 
  return (
    <>
      <Navbar />
      <main className="layout-main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout;