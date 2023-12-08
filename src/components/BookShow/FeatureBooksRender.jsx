import PropTypes from "prop-types";
import ShowNewBook from "./ShowNewBooks.jsx";
import { useContext } from "react";
import { CartContext } from "../Cart/CartContext.jsx";

const FeatureBooksRender = ({ newBooks }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "1rem",
        marginTop:'50px',
        padding:'0 120px 0 120px',
      fontSize:'14px'
        
      }}
    >
      {newBooks.map((newBook) => (
        <div key={newBook.isbn13}>
          <ShowNewBook newBook={newBook} addToCart={addToCart} />
        </div>
      ))}
    </div>
  );
};

FeatureBooksRender.propTypes = {
  newBooks: PropTypes.array.isRequired,
};

export default FeatureBooksRender;
