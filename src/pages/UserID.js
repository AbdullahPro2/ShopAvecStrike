import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";
import SignUp from "../components/SignUp";
import LoginPage from "../components/LoginPage";
function UserID() {
  const [firstVisit, setFirstVisit] = useState(true);
  return (
    <>
      {firstVisit ? (
        <SignUp setFirstVisit={setFirstVisit} />
      ) : (
        <LoginPage setFirstVisit={setFirstVisit} />
      )}
    </>
  );
}

export default UserID;
