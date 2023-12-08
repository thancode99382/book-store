import {AboutUsJson} from "../json/AboutUsJson.js";


export default function AboutUs() {
  return (
      <main className="page" style={{marginTop: "40px"}} id={"AboutUs"}>
        <section className="clean-block about-us">
          <div className="container">
            <div className="block-heading col-7 text-center mx-auto text-gray-600">
              <h2 className="text-info text-4xl text-center">About Us</h2>
              <p style={{marginTop: "20px", marginBottom: "20px"}}>
                We are a small, independent bookstore that opened our doors in 2023. Our shop was founded out of a
                lifelong love of books and passion for sharing great stories with our community.
                We carry a thoughtfully curated selection of books across genres, from both well-known bestsellers to
                up-and-coming authors. From literary fiction to cookbooks to children's tales, our shelves have
                something for every reader.
              </p>
            </div>
            <div className="row justify-content-center">
              {AboutUsJson.map((person, index) => (
                  <div className=" col-sm-6 col-lg-2" key={index}>
                    <div className="card text-center clean-card">
                      <img
                          className="card-img-top w-100 d-block"
                          src={person.avatar}
                          alt={person.name}
                      />
                      <div className="card-body info">
                        <h4 className="card-title font-bold">{person.name}</h4>
                        <p className="card-text mb-4">
                          {person.aboutMe}
                        </p>
                        <div className="icons">
                          <a href="#">
                            <i className="text-blue-500 m-2 bi bi-facebook"></i> {" "}
                          </a>
                          <a href="#">
                            <i className="text-blue-500 m-2 bi bi-instagram"></i>{" "}
                          </a>
                          <a href="#">
                            <i className="text-blue-500 m-2 bi bi-twitter"></i>{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
              ))}

            </div>
          </div>
        </section>
      </main>

  )
}