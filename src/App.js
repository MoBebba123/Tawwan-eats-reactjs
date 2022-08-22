import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/signup";
import UserPage from "./pages/UserPage";
import Verify from "./pages/verify";
const App = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <>
      <div>{userInfo && <span>you are sign in</span>}</div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Signup />} />
          <Route exact path="/verify" element={<Verify />} />
          <Route exact path="/user" element={<UserPage />} />
          <Route exact path="/signin" element={<Signin />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
