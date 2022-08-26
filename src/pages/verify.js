import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyUser } from "../actions/user";

const Verify = (props) => {
  useEffect(() => {
    console.log("zkanel 1");
  }, []);
  const dispatch = useDispatch();

  const [otp, setOtp] = useState("");
  const { isAuthenticated, userInfo } = useSelector(
    (state) => state.userSignin
  );
  console.log(isAuthenticated);
  const { user, isVerified, loading } = useSelector(
    (state) => state.verifyUser
  );

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(verifyUser(otp));
  };
  console.log(user);
  useEffect(() => {
    if (isVerified) {
      props.history.push("/user");
    }
  }, [props.history, isVerified]);
  return (
    <>
      {loading ? (
        <span>loading</span>
      ) : (
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button type="submit">submit</button>
        </form>
      )}
    </>
  );
};

export default Verify;
