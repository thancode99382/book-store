export default function UserInformation() {

  let user = JSON.parse(localStorage.getItem("currentUser"));
  let userName = user ? user.username : null;

  return (
      <div className="container-fluid">

        <div className="card shadow mb-3" style={{margin: '100px', padding: '50px'}}>
          <h1 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '20px'}}>Profile</h1>
          <div className="card-header py-3">
            <p className="text-primary m-0 fw-bold">User Settings</p>
          </div>
          <div>
            <form>
              <div
                  className="row"
                  style={{marginBottom: 25, textAlign: "left"}}
              >
                <div
                    className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-xxl-2"
                    style={{
                      display: "inline",
                      textAlign: "center",
                      marginBottom: 25,
                    }}
                >
                  <img
                      className="rounded-circle mb-3 mt-4 img-fluid" alt={"avatar"}
                      src="https://cdn.vectorstock.com/i/1000x1000/79/06/cute-santa-with-a-christmas-present-flat-vector-39797906.webp"
                      style={{display: "inline", maxHeight: 110}}
                  />
                  <br/>
                </div>
                <div className="col-sm-8 col-md-8 col-lg-9 col-xl-10 col-xxl-10 align-self-center">
                  <div className="row">
                    <div className="col-md-12 text-start">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="username">
                          <strong>userName</strong>
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Username"
                            name="username"
                            required=""
                            disabled
                            value={userName}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}
