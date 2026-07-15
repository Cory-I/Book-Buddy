/* Imports */
import Navbar from "./Navbar.jsx";
import { Outlet } from "react-router";
/* Defenitions */
/* First Function */
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
