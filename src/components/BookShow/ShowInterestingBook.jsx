import PropTypes from "prop-types";
import {useContext, useState} from "react";
import {CartContext} from "../Cart/CartContext.jsx";
import config from "../../config/index.js";
import {CardProductContext} from "../Cart/CardProductProvider.jsx";

export default function ShowInterestingBook({book}) {

  const {addToCart} = useContext(CartContext);
  const {setProduct} = useContext(CardProductContext);

  const [isAddToCart, setIsAddToCart] = useState(false);

  function handleIsAddCart() {
    setIsAddToCart(true);
  }

  const [clickHeart, setClickHeart] = useState(false)

  function handleClickToHeart() {
    setClickHeart(!clickHeart)
  }

  return (
      <div className="flex font-sans bg-white rounded-xl bg-clip-border text-gray-700 shadow-md">
        <div className="flex-none w-50 p-2 relative">
          <img
              src={book.image}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
          />
        </div>
        <form className="flex-auto p-2">
          <div className="flex flex-wrap">
            <h1
                style={{fontSize: "25px", marginRight: "10px"}}
                className="font-semibold text-slate-900"
            >
              {book.title}
            </h1>

            <div
                style={{fontSize: "18px"}}
                className="text-lg text-red-500 font-bold"
            >
              {book.price}
            </div>
          </div>
          <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200"></div>
          <div className="flex space-x-4 mb-6 text-sm font-medium">
            <div className="flex-auto flex space-x-4">
              <a

                  href={`${config.routes.learnmore}/${book.isbn13}`}
                  onClick={() => {
                    setProduct(book);
                  }}
                  style={{fontSize: '13px', display: 'flex', alignItems: 'center'}}
                  className="h-10 px-2 font-semibold rounded-md bg-black text-white"
                  type="submit"
              >
                More Info
              </a>
              <button
                  onClick={() => {
                    addToCart(book);
                    handleIsAddCart();
                  }}
                  className="h-10 px-2 font-semibold rounded-md border border-slate-200 text-slate-900"
                  type="button"
                  disabled={isAddToCart}  // disable the button when isAddToCart is true
              >
                {isAddToCart ? (<i className="text-2xl bi bi-cart-check-fill"></i>) : (
                    <i className="text-2xl bi bi-cart-plus"></i>)}
              </button>

            </div>
            <button
                className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
                type="button"
                aria-label="Like"
                onClick={handleClickToHeart}
            >
              {!clickHeart ? (
                  <i style={{fontSize: "20px", color: "grey"}} className="bi bi-suit-heart transition duration-500"></i>
              ) : (
                  <i style={{color: "red", fontSize: "20px"}}
                     className="bi bi-suit-heart-fill transition duration-700"></i>
              )}
            </button>
          </div>
        </form>
      </div>

  );
}

ShowInterestingBook.propTypes = {
  book: PropTypes.any.isRequired,
};
