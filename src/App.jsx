import { Routes } from "react-router/internal/react-server-client";
import { Route } from "react-router";
import Layout from "./Layout";
import RegisterUser from "./Registration";
import LoginUser from "./Login";
import Profile from "./Profile";
import Home from "./Home";
import Reservations from "./Reservations";
import BookSpecs from "./BookSpecs";
function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<BookSpecs />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
