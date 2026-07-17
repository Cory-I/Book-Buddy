/* Imports */
import { useNavigate } from "react-router";
import { Link } from "react-router";
import { useState } from "react";
import { useAuth } from "./Authorization";
/* Defenitions */
/* First Function */
export default function LoginUser() {
  const { login } = useAuth();
  const [error, setError] = useState(null);
  let navigate = useNavigate();
  const LoginAttempt = async (formData) => {
    setError(null);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(`your password is ${password}`);
    try {
      await login({ email, password });
      navigate("/");
    } catch (e) {
      setError(e.message);
    }
  };
  return (
    <>
      <p
        style={{
          backgroundColor: "#096209",
          padding: "1rem",
          margin: "1rem",
          marginTop: "1rem",
          fontFamily: "Courier, sans-serif",
        }}
      >
        Welcome back. Login here to see your books!
      </p>
      <form
        style={{
          backgroundColor: "#096209",
          padding: "1rem",
          margin: "1rem",
          marginTop: "1rem",
          fontFamily: "Courier, sans-serif",
        }}
        action={LoginAttempt}
      >
        <label style={{ margin: "1rem", fontFamily: "Courier, sans-serif" }}>
          Email:
          <input type="text" name="email" required />
        </label>
        <br></br>
        <label style={{ margin: "1rem", fontFamily: "Courier, sans-serif" }}>
          Password:
          <input type="text" name="password" required />
        </label>
        <br></br>
        <button style={{ margin: "1rem", fontFamily: "Courier, sans-serif" }}>
          Login
        </button>
        <br></br>
        {error && <p role="alert">{error}</p>}
        <Link
          style={{
            textDecoration: "none",
            margin: "1rem",
            fontFamily: "Courier, sans-serif",
            color: "inherit",
          }}
          to="/register"
        >
          Not registered? click here to register.
        </Link>
      </form>
    </>
  );
}
