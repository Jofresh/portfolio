import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import routes from "./routes";

import { UnderConstruction } from "./pages";
import "./App.scss";

function App() {
  const isUnderConstruction = false;

  return (
    <>
      {isUnderConstruction ? (
        <UnderConstruction />
      ) : (
        <BrowserRouter>
          <Navbar routes={routes.filter((route) => route.path !== "*")} />
          <div className="main">
            <Routes>
              {routes.map((route, i) => (
                <Route path={route.path} element={route.element} key={i} />
              ))}
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
