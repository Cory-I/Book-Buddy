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
      <h1>Welcome back. Login here to see your books!</h1>
      <form action={LoginAttempt}>
        <label>
          Email
          <input type="text" name="email" required />
        </label>
        <label>
          Password
          <input type="text" name="password" required />
        </label>
        <button>Login</button>
        {error && <p role="alert">{error}</p>}
        <Link to="/register">Not registered? click here to register.</Link>
      </form>
    </>
  );
}
