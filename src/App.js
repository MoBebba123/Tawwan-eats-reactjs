import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homrpage from "./pages/homepage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homrpage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
