/* Imports */
import { useNavigate } from "react-router";
import { Link } from "react-router";
import { useState } from "react";
import { useAuth } from "./Authorization";
/* Defenitions */
/* Register Function */
export default function RegisterUser() {
  const { register } = useAuth();
  const [error, setError] = useState(null);
  let navigate = useNavigate();

  const RegAttempt = async (formData) => {
    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      await register({ email, password });
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
        Register here to make a profile and get acess to are whole catolouge of
        books!
      </p>
      <form
        style={{
          backgroundColor: "#096209",
          padding: "1rem",
          margin: "1rem",
          marginTop: "1rem",
          fontFamily: "Courier, sans-serif",
        }}
        action={RegAttempt}
      >
        <label style={{ margin: "1rem", fontFamily: "Courier, sans-serif" }}>
          First Name:
          <input type="text" name="firstname" />
        </label>
        <br></br>
        <label style={{ margin: "1rem", fontFamily: "Courier, sans-serif" }}>
          Last Name:
          <input type="text" name="lastname" />
        </label>
        <br></br>
        <label style={{ margin: "1rem", fontFamily: "Courier, sans-serif" }}>
          Email:
          <input type="email" name="email" required />
        </label>
        <br></br>
        <label style={{ margin: "1rem", fontFamily: "Courier, sans-serif" }}>
          Password:
          <input type="text" name="password" required />
        </label>
        <br></br>
        <button style={{ margin: "1rem", fontFamily: "Courier, sans-serif" }}>
          Register
        </button>
        {error && <p role="alert">{error}</p>}
        <br></br>
        <Link
          style={{
            textDecoration: "none",
            margin: "1rem",
            fontFamily: "Courier, sans-serif",
            color: "inherit",
          }}
          to="/login"
        >
          Already a part of the club? Click here to log in.
        </Link>
      </form>
    </>
  );
}
