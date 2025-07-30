{/**Default component */ }
import { Outlet } from "react-router-dom"; {/*React Router component that renders the current page content */ }

{/*Custom components*/ }
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomCursor from "../components/Animations/CustomCursor";

{/**Toastify - Import Toast Library - Used for window notification (Message when a butterfly card is deleted) */ }
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

{/**Style */ }
import "./Layout.css";


{/**Creates the Layout component using arrow function syntax */ }
const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="layout-main">
        <CustomCursor emoji={["🦋", "✨", "🌼", "🐛", "🌸"]} fullScreen={true} />
        <Outlet />
      </main>
      <Footer />

      {/* Toasts en toda la app */}
      <ToastContainer position="top-right" autoClose={3000} />

    </>
  )
}

export default Layout;