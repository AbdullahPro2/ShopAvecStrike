import React, { useContext, useState } from "react";
import { ProductContext } from "../context/productContext";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import userIcon from "../Assets/user.png";
function UserComponent({ setIsActive }) {
  const [userPic, setUserPic] = useState(null);
  const { user, dispatch } = useContext(ProductContext);
  const navigate = useNavigate();

  let nameBeforeAt = "";

  if (user) {
    [nameBeforeAt] = user?.email.split("@");
  }
  function handleClick() {
    navigate("/login");
  }
  async function handleLogout() {
    try {
      await signOut(auth).then(() => {
        navigate("/");
        dispatch({ type: "setUser", payload: null });
      });
    } catch (error) {
      console.log("error occured while logging out");
      console.error(error);
    }
  }

  return (
    <div className="navbar-items user-component-container">
      <img
        src={userPic === null ? userIcon : userPic}
        alt="user-icon"
        className="user-icon"
      />
      <div className="user-component" onClick={() => setIsActive(false)}>
        {user === null ? (
          <div className="user-login">
            <button onClick={() => navigate("/login")}>LOGIN</button>
            <p>
              NEW USER?
              <span onClick={handleClick} className="user-login-link">
                REGISTER NOW
              </span>
            </p>
          </div>
        ) : (
          <div className="user-login">
            <p className="user-login-name">{nameBeforeAt}</p>
            <button onClick={handleLogout}>LOGOUT</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserComponent;
