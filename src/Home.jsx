/* Imports */
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { getBooks } from "./ApiPort";
/* Defenitions */
/* First Function */
export default function Home() {
  const [books, SetBooks] = useState([]);
  console.log(books);
  useEffect(() => {
    async function makeBooks() {
      const data = await getBooks();
      SetBooks(data);
    }
    makeBooks();
  }, []);
  return (
    <>
      <p>Home Page</p>
      <div>
        <ul
          className="homeCard"
          style={{
            backgroundColor: "#108b10",
            padding: "1rem",
            margin: "1rem",
            marginTop: "1rem",
          }}
        >
          {books.map((book) => (
            <li key={book.id}>
              <Link key={book.id} to={`/${book.id}`}>
                <h3>{book.title}</h3>
              </Link>
              — <h5>{book.author}</h5> <img src={book.coverimage} />
              <p>{book.description}</p>
            </li>
          ))}
          <button>+</button> <button>-</button>
        </ul>
      </div>
    </>
  );
}
