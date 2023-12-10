import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your form submission logic here, e.g., send data to the server

    console.log("Form submitted with:", { email, password });

    // Redirect to another page after successful login
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="container">
        <div className="login-heading">
          <h2>Login</h2>
          <p>Continue your journey with our Product</p>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="email-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="password-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button className="btn" type="submit">
            Login
          </button>
        </form>
      </div>
      <p className="bottom">
        First visit?{" "}
        <Link to={"/signup"} className="link">
          SignUp
        </Link>
      </p>{" "}
    </div>
  );
}

export default LoginPage;
