import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";
import SignUp from "../components/SignUp";
import LoginPage from "../components/LoginPage";
function UserID() {
  return (
    <>
      <SignUp />
      <LoginPage />
    </>
  );
}

export default UserID;
