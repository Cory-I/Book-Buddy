/* Imports */
import { useAuth } from "./Authorization";
import { NavLink } from "react-router";
import Layout from "./Layout.jsx";
/* Defenitions */
/* First Function */
export default function Navbar() {
  const { token, logout } = useAuth();
  return (
    <header>
      <h1>
        <img id="logo-image" src="books.png" />
        Library App
      </h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/reservations">Reservations</NavLink>
        {token ? (
          <a href="" onClick={() => logout()}>
            Log out
          </a>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
      </nav>
    </header>
  );
}
