import { exclusiveBooks } from "../../json/ExclusiveThisMonthJson.jsx";
import ExclusiveThisMonthShow from "./ExclusiveThisMonthShow.jsx";
import {useContext} from "react";
import {CartContext} from "../Cart/CartContext.jsx";
import {CardProductContext} from "../Cart/CardProductProvider.jsx";
export default function ExclusiveThisMonthList() {
  const { addToCart } = useContext(CartContext);
  const { setProduct } = useContext(CardProductContext);

  return (
    <>
      {exclusiveBooks.map((exclusiveBook) => (
            <ExclusiveThisMonthShow key={exclusiveBook.isbn13} addToCart={addToCart} detail={setProduct}
                                    exclusiveBook={exclusiveBook}/>
      ))}
    </>
  );
}
// <div
//   classNameName="col-md-6 col-lg-4 filtr-item"
//   data-category="2,3"
//   key={index}
// >
//   <div classNameName="card border-dark">
//     <div classNameName="card-header bg-success text-light">
//       <h5 classNameName="m-0">{exclusiveBook.title}</h5>
//     </div>
//     <img
//       classNameName="img-fluid card-img w-100 d-block rounded-0"
//       src={exclusiveBook.image}
//     />
//     <div classNameName="card-body">
//       <p classNameName="card-text" style={{ paddingTop: 0 }}>
//         {exclusiveBook.summary}
//       </p>
//     </div>
//     <div classNameName="d-flex card-footer">
//       <button classNameName="btn btn-dark btn-sm" type="button">
//         <i classNameName="fa fa-eye" />
//         &nbsp;Learn more
//       </button>
//       <button
//         classNameName="btn btn-outline-dark btn-sm ms-auto"
//         type="button"
//       >
//         <i classNameName="fa fa-plus" />
//         &nbsp;Add to cart
//       </button>
//     </div>
//   </div>
// </div>