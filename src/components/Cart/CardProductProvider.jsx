import {createContext, useEffect} from "react";
import propTypes from "prop-types";
import {useState} from "react";

const CardProductContext = createContext();

function CardProductProvider({children}) {
  const [cardProduct, setCardProduct] = useState({});

  useEffect(() => {
    const storedProduct = localStorage.getItem("cardProduct");
    if (storedProduct) {
      setCardProduct(JSON.parse(storedProduct));
    }
  }, []);

 /* function setProduct(book) {
    // check the book is already exist
    // setCartItems([...cartItems, book]);
    setCardProduct(prevItems => {
      const existingBook = prevItems.find(item => item.isbn13 === book.isbn13);
      if (existingBook) {
        //   if it is, increment the quantity
        existingBook.quantity += 1
        return [...prevItems]
      } else {
        // add to the cart with a new field `quantity`
        return [...prevItems, {...book, quantity: 1}];
      }
    })
  }*/

  function setProduct(book) {
    setCardProduct(book);
    localStorage.setItem("cardProduct", JSON.stringify(book));
  }

  return (
      <CardProductContext.Provider value={{cardProduct, setProduct}}>
        {children}
      </CardProductContext.Provider>
  );
}

CardProductProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export {CardProductProvider, CardProductContext};
