import {useState} from "react";
import PropTypes from "prop-types";

export default function SearchForm({onSubmit}) {
  const [term, setTerm] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(term, 1);
    // setTerm("")
  }

  function handleChange(event) {
    setTerm(event.target.value);
  }

  return (
      <div className="col-4 mx-auto mt-5">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
                type="text"
                className="form-control"
                onChange={handleChange}
                placeholder="Enter your books name"
            />
            <div className="input-group-append">
              <button className="btn btn-primary bg-primary " type="submit">
                Search
              </button>
            </div>
          </div>
        </form>
        {term && (
            <p className="mt-4 text-lg font-semibold text-blue-600">
              The Result for: <span className="text-blue-900">{term}</span>
            </p>
        )}
      </div>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
