export default function ShopCategory() {
  return (
      <div className="container">
        <div
            className="row d-xl-flex justify-content-xl-center"
            style={{marginBottom: 27, marginTop: 0}}
        >
          <div
              className="col-xl-3 col-lg-4 col-md-4"
              style={{
                background: "#e4e0e0",
                marginLeft: 10,
                marginRight: 10,
                marginTop: 10,
                marginBottom: 10,
                padding: 10,
                borderRadius: 9,
              }}
          >
            <div className="row">
              <div
                  className="col-sm-7 col-xl-6 d-xl-flex flex-column justify-content-xl-center align-items-xl-start"
                  style={{paddingLeft: 55}}
              >
                <p className="font-monospace fw-semibold">SHOP CATEGORY</p>
                <span
                    className="fw-semibold"
                    style={{
                      fontSize: 21,
                      fontWeight: "bold",
                      color: "#091579",
                    }}
                >
                    E-BOOKS
                  </span>
                <p
                    className="font-monospace fw-semibold"
                    style={{fontSize: 13}}
                >
                  SHOP NOW{" "}
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 24 24"
                      width="1em"
                      fill="currentColor"
                      style={{fontSize: 23}}
                  >
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                </p>
              </div>
              <div className="col-sm-5 col-lg-8 col-xl-6 d-xl-flex justify-content-xl-center align-items-xl-center">
                <img
                    className="img-fluid"
                    src={`${process.env.PUBLIC_URL}/assets/img/—Pngtree—creative%20electronic%20paper%20book_622858.png`}
                    style={{
                      transform: "rotate(10deg) scale(1.63)",
                      maxWidth: "100%",
                      height: "auto",
                    }}
                />
              </div>
            </div>
          </div>
          <div
              className="col-xl-3 col-lg-4 col-md-4"
              style={{
                background: "#e4e0e0",
                margin: 10,
                padding: 10,
                borderRadius: 9,
              }}
          >
            <div className="row">
              <div
                  className="col-sm-7 col-xl-6 d-xl-flex flex-column justify-content-xl-center align-items-xl-start"
                  style={{paddingLeft: 55}}
              >
                <p className="font-monospace fw-semibold">SHOP CATEGORY</p>
                <span
                    className="fw-semibold"
                    style={{
                      fontSize: 21,
                      fontWeight: "bold",
                      color: "#091579",
                    }}
                >
                    TEXT BOOKS
                  </span>
                <p
                    className="font-monospace fw-semibold"
                    style={{fontSize: 13}}
                >
                  SHOP NOW{" "}
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 24 24"
                      width="1em"
                      fill="currentColor"
                      style={{fontSize: 23}}
                  >
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                </p>
              </div>
              <div className="col-sm-5 col-xl-6 d-xl-flex align-items-xl-center">
                <img
                    className="img-fluid"
                    src={`${process.env.PUBLIC_URL}/assets/img/pngwing.com.png`}
                    style={{width: "100%"}}
                />
              </div>
            </div>
          </div>
          <div
              className="col-xl-3 col-lg-4 col-md-3"
              style={{
                background: "#e4e0e0",
                margin: 10,
                padding: 10,
                borderRadius: 9,
              }}
          >
            <div className="row">
              <div
                  className="col-sm-7 col-xl-6 d-xl-flex flex-column justify-content-xl-center align-items-xl-start"
                  style={{paddingLeft: 55}}
              >
                <p className="font-monospace fw-semibold">SHOP CATEGORY</p>
                <span
                    className="fw-semibold"
                    style={{
                      fontSize: 21,
                      fontWeight: "bold",
                      color: "#091579",
                    }}
                >
                    OFFER ZONE
                  </span>
                <p
                    className="font-monospace fw-semibold"
                    style={{fontSize: 13}}
                >
                  SHOP NOW{" "}
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 24 24"
                      width="1em"
                      fill="currentColor"
                      style={{fontSize: 23}}
                  >
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                </p>
              </div>
              <div className="col-sm-5 col-xl-6 d-xl-flex align-items-xl-center">
                <img
                    className="img-fluid"
                    src={`${process.env.PUBLIC_URL}/assets/img/pngwing.com(1).png`}
                    style={{width: "100%"}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}