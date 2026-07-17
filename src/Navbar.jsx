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
      <h1
        style={{
          backgroundColor: "#096209",
          padding: "1rem",
          marginBottom: "1rem",
          marginTop: "0rem",
          paddingTop: "1rem",
          fontFamily: "Courier, sans-serif",
        }}
      >
        <img id="logo-image" src="books.png" />
        Library App
      </h1>
      <nav className="navbar">
        <NavLink
          className="nav-links"
          style={{
            textDecoration: "none",
            color: "inherit",
            backgroundColor: "#096209",
            padding: ".5rem",
            margin: ".5rem",
            marginTop: "1rem",
            padding: "1rem",
            padding: "1rem",
            fontFamily: "Courier, sans-serif",
          }}
          to="/"
        >
          Home
        </NavLink>
        {token ? (
          <>
            <a
              style={{
                textDecoration: "none",
                color: "inherit",
                backgroundColor: "#096209",
                padding: ".5rem",
                margin: ".5rem",
                marginTop: "1rem",
                padding: "1rem",
                padding: "1rem",
                fontFamily: "Courier, sans-serif",
              }}
              href=""
              onClick={() => logout()}
            >
              Log out
            </a>
            <NavLink
              className="nav-links"
              style={{
                textDecoration: "none",
                color: "inherit",
                backgroundColor: "#096209",
                padding: ".5rem",
                margin: ".5rem",
                marginTop: "1rem",
                padding: "1rem",
                padding: "1rem",
                fontFamily: "Courier, sans-serif",
              }}
              to="/profile"
            >
              Profile
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              className="nav-links"
              style={{
                textDecoration: "none",
                color: "inherit",
                backgroundColor: "#096209",
                padding: ".5rem",
                margin: ".5rem",
                marginTop: "1rem",
                padding: "1rem",
                padding: "1rem",
                fontFamily: "Courier, sans-serif",
              }}
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              className="nav-links"
              style={{
                textDecoration: "none",
                color: "inherit",
                backgroundColor: "#096209",
                padding: ".5rem",
                margin: ".5rem",
                marginTop: "1rem",
                padding: "1rem",
                padding: "1rem",
                fontFamily: "Courier, sans-serif",
              }}
              to="/register"
            >
              Register
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
}
