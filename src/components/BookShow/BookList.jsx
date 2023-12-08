import BookShow from "./BookShow.jsx";
import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../Cart/CartContext.jsx";
import { CardProductContext } from "../Cart/CardProductProvider.jsx";

export default function BookList({ books }) {
  const { addToCart } = useContext(CartContext);
  const { setProduct } = useContext(CardProductContext);

  return (
    <div className="book-list row mt-5 " style={{padding:'0 160px 0 160px' ,display:'grid' , gridTemplateColumns: "1fr 1fr 1fr"}}>
      {books.map((book) => (
        <div className="col-md-3" key={book.isbn13}>
          <BookShow book={book} addToCart={addToCart} setProduct={setProduct} />
        </div>
      ))}
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
};
