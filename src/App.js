import UnderConstruction from "./components/UnderConstruction/UnderConstruction";

// import { Routes, Route } from "react-router-dom";

const IS_UNDER_CONSTRUCTION = true;
function App() {
  return (
    <>
      {IS_UNDER_CONSTRUCTION ? (
        <UnderConstruction />
      ) : (
        <div className="app">
          <div>test</div>
        </div>
      )}
    </>
  );
}

export default App;
