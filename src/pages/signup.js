import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/user";

import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    contactNumber: "",
  });
  const { firstName, lastName, password, email, contactNumber } = user;
  const { loading, error, userInfo } = useSelector((state) => state.userSignin);
  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("firstName", firstName);
    myForm.set("lastName", lastName);
    myForm.set("password", password);
    myForm.set("email", email);
    myForm.set("contactNumber", contactNumber);
    dispatch(register(myForm));
  };

  useEffect(() => {
    if (userInfo) {
      navigate("/verify");
      console.log(userInfo);
    }
  }, [navigate, userInfo]);

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <>
      {loading ? (
        <span>loading...</span>
      ) : (
        <div>
          <form onSubmit={registerSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="first name"
              value={firstName}
              onChange={handleInput}
            />
            <input
              type="text"
              name="lastName"
              placeholder="last name"
              value={lastName}
              onChange={handleInput}
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={handleInput}
            />
            <input
              type="text"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleInput}
            />

            <input
              type="text"
              name="contactNumber"
              placeholder="contactNumber"
              value={contactNumber}
              onChange={handleInput}
            />
            <button type="submit"> signup</button>
          </form>
        </div>
      )}
      {error && <span>{error}</span>}
    </>
  );
};

export default Signup;
