import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import TechnologiesPage from './pages/TechnologiesPage';
import HomePage from "./pages/HomePage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
        { path: "", element: <HomePage /> },
        { path: "tools-and-technologies", element: <TechnologiesPage/>}
    ],
  },
  
]);

export default routes;
