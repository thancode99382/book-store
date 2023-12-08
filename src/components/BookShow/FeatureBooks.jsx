// import { featureBooksJson } from "../json/FeatureBooksJson";
// import { FeatureBooksJson } from '../json/FeatureBooksJson'
// import FeatureBooksRender from "../json/FeatureBooksJson";

import { useEffect, useState } from "react";
import FeatureBooksRender from "./FeatureBooksRender.jsx";
import fetchNewBooks from "../../api/defaultNewBookApi.js";

export default function FeatureBooks() {
  const [newBooks, setNewBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchNewBooks();
      setNewBooks(result);
    };

    fetchData();
  }, []);

  return (
    <div className="container" style={{ marginTop: 28 }}>
      <div className="row d-xl-flex justify-content-xl-center">
        <div className="col-xl-3">
          <div />
          <p
            className="d-xl-flex justify-content-xl-center"
            style={{ fontWeight: "bold", fontSize: 30 }}
          >
            Our New Books
          </p>
        </div>
      </div>
      <div className="row row-cols-1 d-xl-flex justify-content-xl-center">
        <FeatureBooksRender newBooks={newBooks} />
        {/* </div> */}
      </div>
    </div>
  );
}
