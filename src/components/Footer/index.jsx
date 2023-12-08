/* import styles from "./Footer.module.scss";
import classNameNames from "classNamenames/bind";

export default function Footer() {
  const cx = classNameNames.bind(styles); // Bind the styles object to classNameNames
  return <div classNameName={cx("test")}>Footer</div>;
}
 */
import SubscribeNewsletter from "../../components/SubscribeNewsletter"
export default function Footer() {
  return (
    <div id={"Contact"}>
      
      <div className="container-fluit bg-white mt-5" >
        <footer className="container">
        <SubscribeNewsletter />
          <div className="row " style={{padding:'0 160px 0 160px'}}>
            <div className="col">
              <div className="row">
                <div className="col">
                  <img
                    className="d-lg-flex d-xl-flex justify-content-lg-start justify-content-xl-start align-items-xl-center"
                    src="https://demo.joomlabuff.com/bookstore/images/logo/logo_footer.png"
                    height="54"
                    width="244"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col d-md-flex align-items-md-center">
                  <i
                    className="bi bi-send-fill  d-md-flex align-items-md-center"
                    style={{ fontSize: "38px", color:'#091579' }}
                  ></i>
                </div>
                <div className="col-md-8 col-xl-9">
                  <p className="d-md-flex justify-content-md-center">
                    <br />
                    <span style={{ color: "rgb(51, 51, 51)" }}>
                      868 Bechole Road, Victory Lorem Ispuse, New York
                    </span>
                    <br />
                    <br />
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col d-xl-flex align-items-xl-center">
                  <i
                    className="bi bi-telephone-fill "
                    style={{ fontSize: "38px",color:'#091579'  }}
                  ></i>
                </div>
                <div className="col-xl-9">
                  <p>
                    <br />
                    <span style={{ color: "rgb(51, 51, 51)" }}>
                      Phone: (+80) 123 456 Fax: (+80) 123 456 789
                    </span>
                    <br />
                    <br />
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col d-xl-flex align-items-xl-center">
                  <i
                    className="bi bi-envelope-arrow-up-fill  "
                    style={{ fontSize: "38px",color:'#091579' }}
                  ></i>
                </div>
                <div className="col-xl-9">
                  <p>
                    <br />
                    <span style={{ color: "rgb(51, 51, 51)" }}>
                      Email: Contact@bookstore.com Website: www.Bookstore.com
                    </span>
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-2">
              <div className="row">
                <div className="col">
                  <p>
                    <br />
                    <strong>
                      <span style={{ color: "rgb(51, 51, 51)" }}>
                        SHOPPING GUIDE
                      </span>
                    </strong>
                    <br />
                    <br />
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12">
                  <p>How to buy</p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>
                    <span style={{ color: "rgb(51, 51, 51)" }}>Faq&#39;s</span>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>
                    <span style={{ color: "rgb(51, 51, 51)" }}>
                      Where is my order
                    </span>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>
                    <span style={{ color: "rgb(51, 51, 51)" }}>
                      Return pocily
                    </span>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>
                    <span style={{ color: "rgb(39, 174, 97)" }}>Payman</span>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>
                    <span style={{ color: "rgb(51, 51, 51)" }}>Shipment</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col">
                  <p>
                    <br />
                    <strong>
                      <span style={{ color: "rgb(51, 51, 51)" }}>
                        INFORMATION
                      </span>
                    </strong>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>
                    <span style={{ color: "rgb(51, 51, 51)" }}>About us</span>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>Delivery information</p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>Privacy policy</p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>
                    <span style={{ color: "rgb(51, 51, 51)" }}>Discout</span>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>
                    <span style={{ color: "rgb(51, 51, 51)" }}>Customs</span>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>ServiceTerms &amp; condition</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="row">
                <div className="col">
                  <p>
                    <br />
                    <strong>
                      <span style={{ color: "rgb(51, 51, 51)" }}>
                        FIND YOUR LOCAL STORE
                      </span>
                    </strong>
                    <br />
                    <br />
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <img
                    src="https://demo.joomlabuff.com/bookstore/images/map/worldmap.png"
                    width="260"
                    height="161"
                  />
                </div>
              </div>
              <div className="row">
                <div
                  className="col d-xl-flex justify-content-xl-center"
                  style={{ marginTop: " 22px", marginRight: "30px",color:'#091579' }}
                >
                  <i
                    className="bi bi-facebook  d-md-flex align-items-md-center"
                    style={{ fontSize: "38px", marginRight: "30px",color:'#091579' }}
                  ></i>
                  <i
                    className="bi bi-instagram  d-md-flex align-items-md-center"
                    style={{ fontSize: "38px", marginRight: "30px",color:'#091579' }}
                  ></i>
                  <i
                    className="bi bi-twitter  d-md-flex align-items-md-center"
                    style={{ fontSize: "38px", marginRight: "30px",color:'#091579' }}
                  ></i>
                  <i
                    className="bi bi-google  d-md-flex align-items-md-center"
                    style={{ fontSize: "38px", marginRight: "30px",color:'#091579'}}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
