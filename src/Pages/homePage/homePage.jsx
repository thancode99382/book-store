import FeatureBooks from "../../components/BookShow/FeatureBooks.jsx";
import Accordion from "../../components/Accordion.jsx";
import InterestingBooks from "../../components/BookShow/InterestingBooks.jsx";
import ExclusiveThisMonthList from "../../components/BookShow/ExclusiveThisMonthList.jsx";
import Pagination from "../../components/Pagination.jsx";
import Blog from "../../components/Blog.jsx";
import SearchForm from "../../components/Form/SearchForm.jsx";
import searchBooks from "../../api/searchBookApi.js";
import {useEffect, useRef, useState} from "react";
import BookList from "../../components/BookShow/BookList.jsx";
import SignUp from "../../components/SignUp.jsx";
import ShopCategory from "../../components/ShopCategory.jsx";
import AboutUs from "../../components/AboutUs.jsx";

export default function Body() {
  const [books, setBooks] = useState([]);
  const [totalElements, setTotalElements] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [termSearching, setTermSearching] = useState("");
  const [isActivate, setIsActivate] = useState("bestSellers")

  const ref = useRef(null);

  const [pageChange, setPageChange] = useState(0);

  async function handleSubmit(term, page) {
    setIsLoading(true);
    const result = await searchBooks(term, page);
    if (result) {
      setIsLoading(false);
      setTotalElements(result.total);
      setTermSearching(term);
    }
    setPageChange(page);
    setBooks(result.books);
  }

  const [field, setField] = useState("bestSellers");  // default value for first time

  function handleButtonClick(fieldClick) {
    setField(fieldClick);
    setIsActivate(fieldClick)
  }

  const didMount = useRef(false);
  const didMount2 = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      // prevent the behavior unwanted for the first time when the page is loaded
      if (didMount2.current) {
        ref.current.scrollIntoView();
      } else {
        didMount2.current = true;
      }
    } else {
      didMount.current = true;
    }
  }, [termSearching, pageChange]);

  return (
      <>
        <div className="container-fluid">
          <Accordion/>
          <section
              className="d-xl-flex justify-content-xl-center"
              style={{margin: "0px auto", transform: "translateY(-65px)",}}
          >
            <div
                className="row d-xl-flex justify-content-xl-center align-items-xl-center"
                style={{
                  paddingTop: 15,
                  paddingBottom: 15,
                  borderRadius: 7,
                  background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,21,121,1) 35%, rgba(0,212,255,1) 100%)'
                }}
            >
              <div
                  className="col-xl-4"
                  style={{
                    color: "var(--bs-body-bg)",
                    borderRightStyle: "double",
                    borderRightColor: "var(--bs-emphasis-color)",

                  }}
              >
                <div className="row">
                  <div className="col-sm-2 col-xl-3 d-xl-flex justify-content-xl-center align-items-xl-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="bi bi-telephone-fill"
                        style={{fontSize: 34}}
                    >
                      <path
                          fillRule="evenodd"
                          d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                      />
                    </svg>
                  </div>
                  <div className="col">
                    <p>24/7 CUSTOMER SUPPORT</p>
                    <p>Call: +0123 456 789</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4" style={{color: "var(--bs-body-bg)"}}>
                <div className="row">
                  <div className="col-sm-2 col-xl-3 d-xl-flex justify-content-xl-center align-items-xl-center">
                    <i className="bi bi-airplane-fill" style={{fontSize: 34}}/>
                  </div>
                  <div className="col-sm-9 col-xl-9">
                    <p>free shipping world wide</p>
                    <p>On Order Over $99</p>
                  </div>
                </div>
              </div>
              <div
                  className="col-xl-4"
                  style={{
                    color: "var(--bs-body-bg)",
                    borderLeftStyle: "double",
                    borderLeftColor: "var(--bs-emphasis-color)",
                  }}
              >
                <div className="row">
                  <div className="col-sm-2 col-xl-3 d-xl-flex justify-content-xl-center align-items-xl-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 24 24"
                        width="1em"
                        fill="currentColor"
                        style={{fontSize: 34}}>
                      <path d="M0 0h24v24H0z" fill="none"/>
                      <path
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
                    </svg>
                  </div>
                  <div className="col">
                    <p>money back guarantee</p>
                    <p>45 Days Return Service</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <ShopCategory/>
        </div>
        <div className="container">
          <section className="py-5" id={"Offers"}>
            <div className="container">
              <h1 className="text-center mb-4" style={{fontSize: '24px', color: "#091579", fontWeight: 'bold'}}>
                INTERESTING BOOKS
              </h1>
              <div className="filtr-controls text-center lead text-uppercase mb-3">
                <button
                    type="button"
                    className={`btn btn-outline-primary border-2 ${isActivate === 'bestSellers' ? 'active' : ''}`}
                    style={{width: "150px", marginRight: "20px"}}
                    onClick={() => handleButtonClick("bestSellers")}
                >
                  BEST SELLER
                </button>

                <button
                    className={`btn btn-outline-primary border-2 ${isActivate === 'ebooks' ? 'active' : ''}`}
                    style={{width: "150px", marginRight: "20px"}}
                    onClick={() => handleButtonClick("ebooks")}
                >
                  E-Books
                </button>
                <button
                    className={`btn btn-outline-primary border-2 ${isActivate === 'textBooks' ? 'active' : ''}`}
                    style={{width: "150px", marginRight: "20px"}}
                    onClick={() => handleButtonClick("textBooks")}>
                  Text books
                </button>
              </div>
              <div className="row filtr-container " style={{padding: '0 100px 0 100px'}}>
                <InterestingBooks field={field}/>
              </div>
            </div>
          </section>
        </div>

        <div className="container-fluid" style={{paddingLeft: 0, paddingRight: 0}}>
          <blockquote className="quote-card  text-white"
                      style={{background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,21,121,1) 35%, rgba(0,212,255,1) 100%)"}}>
            <p>
              The more that you read, the more things you will know. The more that
              you learn, the more places you ll go.
            </p>
            <cite>Dr. Seuss</cite>{" "}
          </blockquote>
        </div>

        <div className="container">
          <section className="py-5">
            <div className="container">
              <div>
                <div
                    // className="col-xl-4 justify-content-xl-center align-items-xl-center"
                >

                </div>
              </div>
              <div className="row filtr-container " style={{margin: '0 160px 0 160px'}}>
                <h1
                    // className="justify-content-xl-center align-items-xl-center text-center mb-4 "
                    style={{
                      fontSize: 24,
                      paddingBottom: 0,
                      paddingTop: 23,
                    }}
                >
                  EXCLUSIVE THIS MONTH
                </h1>
                <ExclusiveThisMonthList/>
              </div>
            </div>
          </section>
        </div>
        <SignUp/>
        <FeatureBooks/>

        <div ref={ref} id={"SearchBook"}>
          <SearchForm onSubmit={handleSubmit}/>
          {isLoading && (
              <div className="loader mx-auto mt-5">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
          )}
        </div>

        <BookList
            books={books}
            totalElements={totalElements}
            handleSubmit={handleSubmit}
        />
        {totalElements > 0 && (
            <Pagination
                onSubmit={handleSubmit}
                totalElements={parseInt(totalElements)}
                term={termSearching}
            />
        )}

        <div className="container py-4 py-xl-5" id={"Blog"}>
          <div className="row mb-40">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <h4 className={"text-info text-3xl text-center"}>LATEST FROM OUR BLOG</h4>
              <p className="w-lg-50" style={{fontStyle: "italic"}}>
                We love to share our thoughts
              </p>
            </div>
          </div>
          <Blog/>
          <AboutUs/>
        </div>

      </>
  );
}
