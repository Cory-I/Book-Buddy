/* Imports */
import { useEffect, useState } from "react";
import { getReservations } from "./ApiPort.jsx";
import { useAuth } from "./Authorization.jsx";
/* Defenitions */
/* First Function */
export default function Profile() {
  const { token } = useAuth();
  const [reservations, SetReservations] = useState([]);
  useEffect(() => {
    async function makeReservations() {
      if (!token) return;
      const data = await getReservations(token);
      SetReservations(data);
    }
    makeReservations();
  }, [token]);
  console.log(token);
  console.log(reservations);
  return;
  <>
    <p>Profile Page</p>;
    <div>
      <ul className="homeCard">
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            <Link key={reservation.id} to={`/${reservation.id}`}>
              <h3>{reservation.title}</h3>
            </Link>
            — <h5>{reservation.author}</h5> <img src={reservation.coverimage} />
            <p>{reservation.description}</p>
            <button>Return</button>
          </li>
        ))}
      </ul>
    </div>
  </>;
}
