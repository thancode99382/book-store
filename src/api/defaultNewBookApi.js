import axios from "axios";

async function fetchNewBooks() {
  const response = await axios.get("https://api.itbook.store/1.0/new");
  const books = response.data.books.slice(0, 9); // Retrieve only the first 9 books

  return books;
}

export default fetchNewBooks;
