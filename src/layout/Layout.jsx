{/**Default component */}
import { Outlet } from "react-router-dom"; {/*React Router component that renders the current page content */ }

{/*Custom components*/}
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

{/**Style */}
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