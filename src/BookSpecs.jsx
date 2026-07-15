/* Imports */
import { useState, useEffect } from "react";
import { useParams } from "react-router";
/* Defenitions */
const API = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";
/* First Function */
export default function BookSpecs() {
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
      <div>
        <h4>{book.title}</h4>
        <img src={book.coverimage} />
        <p>{book.author}</p>
        <p>{book.description}</p>
        <p>{book.available}</p>
      </div>
    </>
  );
}
