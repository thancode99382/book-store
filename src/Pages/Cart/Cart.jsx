import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../components/Cart/CartContext.jsx";
function Cart() {
  const { cartItems } = useContext(CartContext);
  const { setCartItems } = useContext(CartContext);
  const { removeFromCart } = useContext(CartContext);

  const [sum, setSum] = useState(0);

  function handleQuantityChange(book, newQuantity) {
    setCartItems((prevItems) => {
      const existingBook = prevItems.find(
        (item) => item.isbn13 === book.isbn13
      );
      if (existingBook) {
        existingBook.quantity = parseInt(newQuantity);
      }
      return [...prevItems];
    });
  }

  function calculateSum(books) {
    let totalCost = 0;

    // Loop through each book and extract the price
    books.forEach((book) => {
      // Remove "$" sign and convert to number
      let price = parseFloat(book.price.replace("$", ""));

      // Add to the total cost
      let cost = price * book.quantity;
      totalCost += cost;
    });
    setSum(totalCost.toFixed(2));
    return totalCost; // Return the total cost formatted to two decimal places
  }

  useEffect(() => {
    calculateSum(cartItems);
  }, [cartItems]);
  // console.log(cartItems);

  return (
    <div style={{padding:'0 160px 0 160px'}} className="container mt-5 ">
      <div className="shopping-cart">
        <div className="px-4 px-lg-0">
          <div className="pb-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="border-0 bg-light" scope="col">
                            <div className="p-2 px-3 text-uppercase">
                              Product
                            </div>
                          </th>
                          <th className="border-0 bg-light" scope="col">
                            <div className="py-2 text-uppercase">Price</div>
                          </th>
                          <th className="border-0 bg-light" scope="col">
                            <div className="py-2 text-uppercase">Quantity</div>
                          </th>
                          <th className="border-0 bg-light" scope="col">
                            <div className="py-2 text-uppercase">Remove</div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((cart, index) => {
                          return (
                            <tr key={index}>
                              <th className="border-0" scope="row">
                                <div className="p-2 d-flex">
                                  <img
                                    className="img-fluid rounded shadow-sm"
                                    src={cart.image}
                                    alt={cart.title}
                                    width="90"
                                  />
                                  <div className="ml-3 d-inline-block align-middle">
                                    <h5 className="mb-0">
                                      <a
                                        className="text-dark d-inline-block align-middle"
                                        href="#"
                                      >
                                        {cart.title}
                                      </a>
                                    </h5>
                                    <span className="text-muted font-weight-normal font-italic d-block">
                                      {cart.subtitle ? (cart.subtitle): 'Have no subtitle yet. ( ´･･)ﾉ(._.`)'}
                                    </span>
                                  </div>
                                </div>
                              </th>
                              <td className="border-0 align-middle">

                                {cart.price === '$0.00' ? (<p className={'text-success fw-bold'}>Free</p>): (<strong>{cart.price}</strong>) }
                              </td>
                              <td className="border-0 align-middle">
                                {/* <strong>3</strong> */}
                                <input
                                  style={{ width: "100px" }}
                                  type="number"
                                  className="form-control form-control-sm"
                                  value={cart.quantity}
                                  onChange={(e) =>
                                    handleQuantityChange(cart, e.target.value)
                                  }
                                />
                              </td>
                              <td className="border-0 align-middle">
                                <a className="text-dark" href="#">
                                  <i
                                    style={{ fontSize: "30px", color: "red" }}
                                    className="bi bi-trash-fill"
                                    onClick={() => {
                                      removeFromCart(cart.isbn13);
                                    }}
                                  ></i>
                                </a>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  {cartItems.length === 0 && (
                    <p>
                      <i>
                        Unfortunately, it appears that you do not currently have
                        any products 😥
                      </i>
                    </p>
                  )}
                </div>
              </div>
              <div className="row py-5 p-4 bg-white rounded shadow-sm">
                <div className="col-lg-6">
                  <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                    Coupon code
                  </div>
                  <div className="p-4">
                    <p className="font-italic mb-4">
                      If you have a coupon code, please enter it in the box
                      below
                    </p>
                    <div className="input-group mb-4 border rounded-pill p-2">
                      <input
                        className="form-control border-0"
                        type="text"
                        placeholder="Apply coupon"
                        aria-describedby="button-addon3"
                      />
                      <div className="input-group-append border-0">
                        <button
                          id="button-addon3"
                          className="btn btn-dark px-4 rounded-pill"
                          type="button"
                        >
                          <i className="fa fa-gift mr-2"></i>Apply coupon
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                    Instructions for seller
                  </div>
                  <div className="p-4">
                    <p className="font-italic mb-4">
                      If you have some information for the seller you can leave
                      them in the box below
                    </p>
                    <textarea
                      className="form-control"
                      cols="30"
                      rows="2"
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                    Order summary{" "}
                  </div>
                  <div className="p-4">
                    <p className="font-italic mb-4">
                      Shipping and additional costs are calculated based on
                      values you have entered.
                    </p>
                    <ul className="list-unstyled mb-4">
                      <li className="d-flex justify-content-between py-3 border-bottom">
                        <strong className="text-muted">Order Subtotal </strong>
                        <strong>0</strong>
                      </li>
                      <li className="d-flex justify-content-between py-3 border-bottom">
                        <strong className="text-muted">
                          Shipping and handling
                        </strong>
                        <strong>0</strong>
                      </li>
                      <li className="d-flex justify-content-between py-3 border-bottom">
                        <strong className="text-muted">Tax</strong>
                        <strong>0</strong>
                      </li>
                      <li className="d-flex justify-content-between py-3 border-bottom">
                        <strong className="text-muted">Total</strong>
                        <h5 className="font-weight-bold">${sum}</h5>
                      </li>
                    </ul>
                    <a
                      className="btn btn-dark rounded-pill py-2 btn-block"
                      href="#"
                    >
                      Procceed to checkout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="row g-0">
          <div className="col-md-12 col-lg-8">
            <div className="items">
              <div className="product"></div>
              <div className="product"></div>
              <div className="product"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
