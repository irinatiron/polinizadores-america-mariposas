import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ButterfliesCards from "../pages/ButterfliesCards";
import About from "../pages/About";

import EditButterfly from "../pages/EditButterfly";
import CreateButterlfy from "../pages/CreateButterfly";
import ButterflyDetail from "../pages/ButterflyDetail";
import Layout from "../layout/Layout";



const routerButterfly = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [
        {
            index: true,
            element: <Home />,
        },
        {
            path: "fichas-mariposas",
            element: <ButterfliesCards />
        },
        {
            path: "/nueva-mariposa",
            element: <CreateButterlfy />
        },
        {
            path: "/editar-mariposa/:id",
            element: <EditButterfly />
        },
        {
            path: "/detalle-mariposa/:id",
            element: <ButterflyDetail />
        },
        {
            path: "/creadoras",
            element: <About />
        }
    ]
}])
export default routerButterfly;