/* Imports */
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { getReservations, returnBook, getProfile } from "./ApiPort.jsx";
import { useAuth } from "./Authorization.jsx";
/* Defenitions */
/* First Function */
export default function Profile() {
  const { token } = useAuth();
  const [profile, setProfile] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function makeProfile() {
      if (!token) return;
      const data = await getProfile(token);
      setProfile(data);
    }
    makeProfile();
  }, [token]);
  const [reservations, setReservations] = useState([]);
  useEffect(() => {
    async function makeReservations() {
      if (!token) return;
      try {
        const data = await getReservations(token);
        setReservations(data);
      } catch (e) {
        setError(e.message);
      }
    }
    makeReservations();
  }, [token]);
  console.log(token);
  console.log(reservations);
  return (
    <>
      <div>
        <h2
          style={{
            backgroundColor: "#096209",
            padding: "1rem",
            margin: "1rem",
            marginTop: "1rem",
            fontFamily: "Courier, sans-serif",
          }}
        >
          Profile
        </h2>
        <div
          style={{
            backgroundColor: "#096209",
            padding: "1rem",
            margin: "1rem",
            marginTop: "1rem",
            fontFamily: "Courier, sans-serif",
          }}
        >
          <p
            style={{
              fontFamily: "Courier, sans-serif",
            }}
          >
            Your Book Buddy Id: {profile.id}
          </p>
          <p
            style={{
              fontFamily: "Courier, sans-serif",
            }}
          >
            Account Owner: {profile.firstname} {profile.lastname}
          </p>
          <p
            style={{
              fontFamily: "Courier, sans-serif",
            }}
          >
            Account Email: {profile.email}
          </p>
          <p
            style={{
              fontFamily: "Courier, sans-serif",
            }}
          >
            Your Current Reservations:{" "}
          </p>
        </div>
        {error && <p role="alert">{error}</p>}
        <ul
          style={{
            backgroundColor: "#096209",
            padding: "1rem",
            margin: "1rem",
            marginTop: "1rem",
            fontFamily: "Courier, sans-serif",
            listStyle: "none",
            margin: "1rem",
          }}
        >
          {reservations.map((reservation) => (
            <li
              style={{
                listStyle: "none",
              }}
              key={reservation.id}
            >
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                key={reservation.id}
                to={`/${reservation.id}`}
              >
                <h3 style={{ listStyle: "none", textDecoration: "none" }}>
                  {reservation.title}
                </h3>
              </Link>
              — <h5>{reservation.author}</h5>{" "}
              <img src={reservation.coverimage} />
              <p>{reservation.description}</p>
              <button
                onClick={async () => {
                  try {
                    await returnBook(token, reservation.id);
                    const updated = await getReservations(token);
                    setReservations(updated);
                  } catch (e) {
                    setError(e.message);
                  }
                }}
              >
                Return
              </button>
              <br></br>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
