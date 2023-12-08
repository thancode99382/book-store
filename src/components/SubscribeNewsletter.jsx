export default function SubscribeNewsletter() {
  return (
    <div className="container-fluid">
      <section
        className="py-4 py-xl-5"
        style={{ paddingTop: 0, paddingBottom: 0 }}
      >
        <div className="container-fluid"> 
          <div
            className="text-white border rounded border-0 border-light d-flex flex-column justify-content-between align-items-center flex-lg-row p-4 p-lg-5"
            data-bs-theme="light"
            style={{
              paddingTop: 0,
              paddingBottom: 0,
              background: "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,21,121,1) 35%, rgba(0,212,255,1) 100%)",
            }}
          >
            <div className="text-center text-lg-start py-3 py-lg-1">
              <h2 className="fw-bold mb-2">
                <strong>Subscribe to our newsletter</strong>
              </h2>
              <p className="mb-0">Imperdiet consectetur dolor.</p>
            </div>
            <form
              className="d-flex justify-content-center flex-wrap my-2"
              method="post"
            >
              <div className="my-2">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="my-2">
                <button className="btn btn-primary ms-sm-2" type="submit">
                  Subscribe{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
