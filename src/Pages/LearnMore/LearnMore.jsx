import {useContext} from "react";
import {CardProductContext} from "../../components/Cart/CardProductProvider.jsx";
import CardReview from "../../components/Cart/CardReview.jsx";
import {useState} from "react";
import {CartContext} from "../../components/Cart/CartContext.jsx";

function LearnMore() {
  const {cardProduct} = useContext(CardProductContext);
  const [notitran, setnotitran] = useState("415px");
  const {addToCart} = useContext(CartContext);
  const [quantity, setQuantity] = useState(1)

  // console.log(cardProduct);

  return (
      <div style={{padding: '0 160px 0 160px'}}>
        <div className="noti" style={{transform: `translate(${notitran},0)`}}>
          <div className="toast__icon">
            <i className="bi bi-bag-check"></i>
          </div>
          <div className="toast__body">
            <h3 className="toast__title">Thành Công</h3>
            <p className="toast__msg">Bạn đã thêm sản phẩm </p>
          </div>
          <div
              className="toast__close"
              onClick={() => {
                setnotitran("450px");
              }}
          >
            <i className="bi bi-x-square"></i>
          </div>
        </div>
        <div className=" border border-2 mt-5 p-4 rounded bg-white">
          <div className="row">
            <div className="col">
              <div className="row " style={{marginTop: "24px "}}>
                <CardReview image={cardProduct.image}/>
              </div>
              <div
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "center",
                  }}
              >
                <button
                    type="button"
                    className="btn  border-2"
                    style={{width: "218px", marginRight: "20px", borderColor: '#091579'}}
                    onClick={() => {
                      addToCart(cardProduct, quantity);
                      setnotitran("0");
                      setTimeout(() => {
                        setnotitran("415px");
                      }, 3000);
                    }}
                >
                  Thêm vào giỏ hàng
                </button>

                <button
                    type="button"
                    className="btn border-2 "
                    style={{width: "218px", color: 'white', borderColor: '#091579', background: '#091579'}}
                >
                  Mua Ngay
                </button>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col">
                  <p>
                    <br/>
                    <strong>
                    <span style={{color: " rgb(51, 51, 51)"}}>
                      {cardProduct.title}
                    </span>
                    </strong>
                    <br/>
                    <br/>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="row">
                    <div className="col">
                      <p>
                      <span style={{color: " rgb(51, 51, 51)", marginRight: "7px"}}>
                        Nhà cung cấp:
                      </span>
                        <a href="https://www.fahasa.com/tan-viet">
                          <strong>
                          <span style={{color: " rgb(36, 137, 244)"}}>
                            ITBooks
                          </span>
                          </strong>
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p>
                      <span style={{color: " rgb(51, 51, 51)", marginRight: "7px"}}>
                        Nhà xuất bản:
                      </span>
                        <strong>
                        <span style={{color: " rgb(51, 51, 51)"}}>
                          Dân Trí
                        </span>
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col d-xl-flex justify-content-xl-end">
                      <p>
                      <span style={{color: " rgb(51, 51, 51)"}}>
                        Tác giả: (●'◡'●)
                      </span>
                        <strong>
                        <span style={{color: " rgb(51, 51, 51)"}}>
                          {cardProduct.author}
                        </span>
                        </strong>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col d-xl-flex justify-content-xl-end">
                      <p>
                      <span style={{color: " rgb(51, 51, 51)", marginRight: "7px"}}>
                        Hình thức bìa:
                      </span>
                        <strong>
                        <span style={{color: " rgb(51, 51, 51)"}}>
                          Bìa Cứng
                        </span>
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>
                    <br/>
                    <strong>
                    <span
                        style={{
                          color: "rgb(201, 33, 39)",
                          backgroundColor: "transparent",
                          marginRight: "7px"
                        }}
                    >
                      {cardProduct.price}
                    </span>
                    </strong>
                    <span
                        style={{
                          textDecoration: "line-through",
                          color: "rgb(13, 14, 15)",
                          marginRight: "7px"
                        }}
                    >
                    245.000 {" "}
                  </span>
                    <strong>
                    <span
                        style={{
                          color: "rgb(255, 255, 255)",
                          backgroundColor: "rgb(201, 33, 39)",
                        }}
                    >
                      -40%
                    </span>
                    </strong>
                    <br/>
                    <br/>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="row">
                    <div className="col">
                      <p>
                      <span style={{color: "rgb(51, 51, 51)"}}>
                        Thời gian giao hàng
                      </span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p>
                      <span style={{color: "rgb(51, 51, 51)"}}>
                        Chính sách đổi trả
                      </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col">
                      <p>Giao hàng đến</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p>
                      <span style={{color: "rgb(51, 51, 51)"}}>
                        Đổi trả sản phẩm trong30ngày
                      </span>
                        <strong>
                        <span style={{color: "rgb(36, 137, 244)"}}>
                          Xem thêm
                        </span>
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col d-flex">
                  <span style={{color: "rgb(85, 85, 85)", marginRight: "7px"}}>Số lượng: {" "}</span>
                  <input
                      style={{width: "100px"}}
                      type="number"
                      className="form-control form-control-sm"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value))}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default LearnMore;
