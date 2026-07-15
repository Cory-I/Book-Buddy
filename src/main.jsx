/* Imports */
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Routes, Route } from "react-router";
import App from "./App.jsx";
import "./App.css";
import Layout from "./Layout.jsx";
import { AuthProvider } from "./Authorization.jsx";
/* Defenitions */
/* Main Function */
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>,
);

/* 
Pages - Contents:
Home - nav bar, book list 
NavBar - nav bar, registration, login
BookSpecs - nav bar, details about book, reserve/return buttons
Registration - nav bar, user name and password fields, submit button
Login - nav bar, user name and password fields, submit button
Profile - nav bar, profile info, ?list of reserved books?
Reservations - list of reserved books with return buttons
ApiPort - contains fetch, delete, add and auth functions
Layout - nav bar, main
Authorization - 
 */
