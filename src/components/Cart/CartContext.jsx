import {createContext, useEffect, useState} from "react";
import propTypes from "prop-types";

const CartContext = createContext();

const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState(() => {
    const localData = localStorage.getItem("cartItems");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems]);

  const addToCart = (book, quantity = 1) => {
    setCartItems(prevItems => {
      const existingBook = prevItems.find(item => item.isbn13 === book.isbn13);
      if (existingBook) {
        // if it is, increment the quantity
        existingBook.quantity += quantity;
        return [...prevItems];
      } else {
        // add to the cart with a new field `quantity`
        return [...prevItems, {...book, quantity: quantity}];
      }
    });
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.isbn13 !== id);
    setCartItems(updatedCart);
  };

  return (
      <CartContext.Provider value={{setCartItems, cartItems, addToCart, removeFromCart}}>
        {children}
      </CartContext.Provider>
  );
};
CartProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export {CartContext, CartProvider};
