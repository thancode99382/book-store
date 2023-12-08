import {useState} from "react";
import {Link} from "react-router-dom";
import config from "../../config/index.js";

export default function ExclusiveThisMonthShow({exclusiveBook, addToCart, detail}) {
  const [isAddToCart, setIsAddToCart] = useState(false);

  function handleIsAddCart() {
    setIsAddToCart(true);
  }

  const [clickHeart, setClickHeart] = useState(false)

  function handleClickToHeart() {
    setClickHeart(!clickHeart)
  }

  return (
      <div className="flex font-sans mt-3">
        <div className="flex-none w-48 relative">
          <img
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              src={exclusiveBook.image}
              alt={exclusiveBook.title}
          />
        </div>
        <form className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-2xl font-semibold text-slate-900">
              {exclusiveBook.title}
            </h1>

            <div className="w-full flex-none font-medium text-slate-700 mt-2">
              {exclusiveBook.summary}
            </div>
          </div>
          <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">

          </div>
          <div className="flex space-x-4 mb-6 text-sm font-medium">
            <div className="flex-auto flex space-x-4">
              <a href={`${config.routes.learnmore}/${exclusiveBook.isbn13}`}
                 className="select-none rounded-lg bg-dark py-3 px-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-dark-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                 onClick={() => {
                   detail(exclusiveBook);
                 }}
              >
                Learn More
              </a>
              <button
                  onClick={() => {
                    addToCart(exclusiveBook);
                    handleIsAddCart();
                  }}
                  data-ripple-light="true"
                  type="button"
                  disabled={isAddToCart}
                  className="select-none rounded-lg bg-blue-500 py-3 px-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                {isAddToCart ? (
                    <i className="bi bi-cart-check-fill"></i>
                ) : (
                    "Add to cart"
                )}
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
          <p className="text-sm text-slate-700">
            Free shipping on all continental US orders.
          </p>
        </form>
      </div>
  )
}