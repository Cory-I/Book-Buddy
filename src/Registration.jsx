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
      <h2>
        Register here to make a profile and get acess to are whole catolouge of
        books!
      </h2>
      <form action={RegAttempt}>
        <label>
          First Name
          <input type="text" name="firstname" />
        </label>
        <label>
          Last Name
          <input type="text" name="lastname" />
        </label>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Password
          <input type="text" name="password" required />
        </label>
        <button>Register</button>
        {error && <p role="alert">{error}</p>}
        <Link to="/login">
          Already a part of the club? Click here to log in.
        </Link>
      </form>
    </>
  );
}
