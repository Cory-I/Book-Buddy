/* Imports */
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { reserveBook, returnBook, getBooks } from "./ApiPort";
import { useAuth } from "./Authorization";
/* Defenitions */
const API = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";
/* First Function */
export default function BookSpecs() {
  const { token } = useAuth();
  const { id } = useParams();
  const [book, setBook] = useState(null);
  useEffect(() => {
    async function findBook() {
      try {
        const response = await fetch(API + `/books/${id}`);
        const result = await response.json();
        setBook(result);
      } catch (e) {
        console.error(e);
        return [];
      }
    }
    findBook();
  }, [id]);
  if (!book) return <p>Loading...</p>;
  return (
    <>
      <div
        style={{
          backgroundColor: "#096209",
          padding: "1rem",
          margin: "1rem",
          marginTop: "1rem",
          fontFamily: "courier, sans-serif",
        }}
      >
        <h4
          style={{
            backgroundColor: "#096209",
            padding: "1rem",
            fontFamily: "courier,sans-serif",
          }}
        >
          {book.title}
        </h4>
        <img
          src={book.coverimage}
          style={{
            padding: "1rem",
            margin: "1rem",
            marginTop: "1rem",
            flexDirection: "column",
            textAlign: "center",
          }}
        />
        <p
          style={{
            backgroundColor: "#096209",
            padding: "1rem",
            fontFamily: "courier,sans-serif",
          }}
        >
          {book.author}
        </p>
        <p
          style={{
            backgroundColor: "#096209",
            padding: "1rem",
            fontFamily: "courier,sans-serif",
          }}
        >
          {book.description}
        </p>
        <p>{book.available}</p>
        {book.available && (
          <button
            onClick={async () => {
              await reserveBook(token, book.id);

              // re-fetch this book
              const response = await fetch(API + `/books/${id}`);
              const updated = await response.json();
              setBook(updated);
            }}
          >
            Reserve
          </button>
        )}
      </div>
    </>
  );
}
