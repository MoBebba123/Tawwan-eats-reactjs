import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../actions/user";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, loading, userInfo } = useSelector((state) => state.userSignin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  useEffect(() => {
    if (error) {
      window.alert(error);
    }
    if (userInfo) {
      navigate("/user");
    }
  }, [userInfo, error, navigate]);

  return (
    <>
      {loading ? (
        <span>loading...</span>
      ) : (
        <div>
          <form onSubmit={loginSubmit}>
            <input
              type="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit"> login</button>
          </form>
        </div>
      )}
      {error && <span>{error}</span>}
    </>
  );
};

export default Signin;
