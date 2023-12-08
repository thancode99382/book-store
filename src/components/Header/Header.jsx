import { Link } from "react-router-dom";
import config from "../../config";
import Navbar from "./Navbar";
export default function Header() {

  return (
    <div
      className="container-fluid "
      style={{
        paddingLeft: "0px",
        paddingRight: "0px",
      }}>

      <header  className="bg-white ">
        <div
          className="row d-xl-flex justify-content-xl-center align-items-xl-center">
          <div className="col-xl-4 d-lg-flex align-items-lg-center justify-content-xl-start">
            <Link to={config.routes.homePage}>
              <img alt={'image bg'} style={{width:'128px' ,height:"87px"}} width={257} height={87}  src="https://png.pngtree.com/template/20191125/ourlarge/pngtree-book-store-logo-template-sale-learning-logo-designs-vector-image_335046.jpg" />
            </Link>
          </div>
          <div className="col-lg-6 col-xl-5 offset-lg-0 d-xl-flex justify-content-lg-center align-items-lg-center justify-content-xl-end">
          {/*  <button
              className="btn btn-outline-dark"
              type="button"
              style={{ marginLeft: "-8px", marginRight: "10px" }}>
              Currency
            </button>*/}
            <Link to={config.routes.cart} className="btn btn-outline-dark">
              Cart
            </Link>
          </div>
        </div>
        <Navbar />
      </header>
    </div>
  );
}
