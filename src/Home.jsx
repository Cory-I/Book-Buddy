/* Imports */
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { getBooks, reserveBook, returnBook, getReservations } from "./ApiPort";
import { useAuth } from "./Authorization";
/* Defenitions */
/* First Function */
export default function Home() {
  const { token } = useAuth();
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function makeBooks() {
      const data = await getBooks();
      setBooks(data);
    }
    makeBooks();
  }, []);
  const [reservations, setReservations] = useState([]);
  useEffect(() => {
    async function makeReservations() {
      try {
        if (!token) return;
        const data = await getReservations(token);
        setReservations(data);
      } catch (e) {
        setError(e.message);
      }
    }
    makeReservations();
  }, [token]);
  console.log(token);
  return (
    <>
      <h2
        style={{
          backgroundColor: "#096209",
          padding: "1rem",
          margin: "1rem",
          marginTop: "1rem",
          marginLeft: "0rem",
          fontFamily: "Courier, sans-serif",
        }}
      >
        Home Page
      </h2>
      <div>
        {error && <p role="alert">{error}</p>}
        <ul
          style={{ listStyle: "none", marginLeft: "0rem", marginRight: "2rem" }}
        >
          {books.map((book) => (
            <li
              style={{
                listStyle: "none",
                backgroundColor: "#096209",
                padding: "1rem",
                margin: "1rem",
                marginTop: "1rem",
                fontFamily: "Courier, sans-serif",
              }}
              key={book.id}
            >
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                key={book.id}
                to={`/${book.id}`}
              >
                <h3>Click Here To Learn More About {book.title}</h3>
              </Link>
              <img src={book.coverimage} />
              <br></br>
              {book.available && (
                <button
                  onClick={async () => {
                    try {
                      await reserveBook(token, book.id);
                      const updatedBooks = await getBooks();
                      setBooks(updatedBooks);
                    } catch (e) {
                      setError(e.message);
                    }
                  }}
                >
                  Reserve
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
