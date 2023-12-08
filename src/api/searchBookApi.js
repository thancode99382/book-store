import axios from "axios";

async function searchBooks(term, page) {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const response = await axios.get(
        `https://api.itbook.store/1.0/search/${term}/${page}`
      );
      resolve(response.data);
    }, 200);
  });
}

export default searchBooks;
