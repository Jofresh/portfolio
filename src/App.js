import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import routes from "./libs/routes";

import { UnderConstruction } from "./pages";
import "./App.scss";

function App() {
  const isUnderConstruction = true;

  return (
    <>
      {isUnderConstruction ? (
        <UnderConstruction />
      ) : (
        <BrowserRouter>
          <div className="app">
            <Navbar routes={routes.filter((route) => route.path !== "*")} />
            <div className="main">
              <Routes>
                {routes.map((route, i) => (
                  <Route path={route.path} element={route.element} key={i} />
                ))}
              </Routes>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
