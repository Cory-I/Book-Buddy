/* Imports */
const API = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";
/* Defenitions */
/* Base Function */
/* export async function getBase(){
    try{
        const response = await fetch(API + "/addOn")
        const result = await response.json()
        return result
    } catch (e){
        console.error(e)
        return []
    }
} */
/* Get Function */
export async function getBooks() {
  try {
    const response = await fetch(API + "/books");
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    return [];
  }
  console.log(result);
}
export async function getBook() {
  try {
    const response = await fetch(API + "/books/");
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    return [];
  }
  console.log(result);
}
export async function getReservations(token) {
  if (!token) {
    throw Error("You must be signed in to see reservations.");
  }

  try {
    const response = await fetch(API + "/reservations", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    return [];
  }
}
export async function reserveBook(token, id) {
  if (!token) {
    throw Error("You must be signed in to make a reservation.");
  }
  const response = await fetch(API + "/reservations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(id),
  });

  if (!response.ok) {
    const result = await response.json();
    throw Error(result.message);
  }
  return await response.json();
}
/* ensure you can't delete other peoples reservations */
export async function returnBook(token, id) {
  if (!token) {
    throw Error("You must be signed in to delete a reservation.");
  }
  const response = await fetch(API + "/reservations/" + { id }, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  if (!response.ok) {
    const result = await response.json();
    throw Error(result.message);
  }
  if (response.status === 204) return { success: true };
  return await response.json();
}
/* Keep for future testing. May be needed. */
/* export async function getBookBetter() {
  try {
    const response = await fetch(API + "/books");

    console.log("STATUS:", response.status);
    console.log("RAW:", await response.text());

    const result = await response.json();
    console.log(result.books);
    return result.books;
  } catch (e) {
    console.error(e);
    return [];
  }
}
getBookBetter(); */
