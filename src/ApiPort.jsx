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
