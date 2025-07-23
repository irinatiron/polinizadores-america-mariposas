import { createBrowserRouter } from "react-router-dom";
import EditButterfly from "../pages/EditButterfly";
import CreateButterlfy from "../pages/CreateButterfly";
import ButterflyDetail from "../pages/ButterflyDetail";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Creators from "../pages/Creators";

const routerButterfly = createBrowserRouter([{
    path: "/",
    element: <Layout/>,
    children: [
        {
            index: true,
            element: <Home/>,
        },
        {
            path: "/nueva-mariposa",
            element: <CreateButterlfy/>
        },
        {
            path: "/editar-mariposa/:id",
            element: <EditButterfly/>
        },
        {
            path: "/detalle-mariposa/:id",
            element: <ButterflyDetail/>
        },
        {
            path: "/sobre-nosotras",
            element: <About/>
        },
        {
            path: "/contacto",
            element: <Contact/>
        },
        {
            path: "/creadoras",
            element: <Creators/>
        },
        {
            path: "/formulario",
            element: <Contact/>
        }
    ]
}])
export default routerButterfly;