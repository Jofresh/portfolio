import { Home, Experience, Education, About } from "../pages";
import { Navigate } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <Home />,
    name: "Home",
  },
  {
    path: "/experience",
    element: <Experience />,
    name: "Experience",
  },
  {
    path: "/education",
    element: <Education />,
    name: "Education",
  },
  {
    path: "/about",
    element: <About />,
    name: "About",
  },
  {
    path: "*",
    element: <Navigate to="/" />,
    name: "Home",
  },
];

export default routes;
