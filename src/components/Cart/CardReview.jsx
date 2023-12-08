import PropTypes from "prop-types";
import "../../assets/css/Product-Viewer-1-untitled.css";
import "../../assets/js/Product-Viewer-1-3.1.1-jquery.min.js";
import "../../assets/js/Product-Viewer-1-untitled.js";

export default function CardReview({ image }) {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-md-1 product">
            <div className="row">
              <div className="col-md-7">
                <div className="product-image">
                  {/* <div className="image img-fluid" /> */}
                  <div className="image img-fluid d-flex justify-content-center">
                    <img src={image} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CardReview.propTypes = {
  image: PropTypes.string,
};
