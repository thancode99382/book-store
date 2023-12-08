import {useState} from "react";
import PropTypes from "prop-types";

export default function Pagination({onSubmit, totalElements, term}) {
  // const totalPages = Math.ceil(totalElements / 10);
  // const [maxPageLimit, setMaxPageLimit] = useState(totalPages);
  // const [minPageLimit, setMinPageLimit] = useState(0);

  /*  async function onPageChange(pageNumber) {
    setCurrentPage(pageNumber);
    setIsLoading(true);
    await onSubmit(term, pageNumber);
    setIsLoading(false);
  }*/

  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [disabledPreviousPage, setDisabledPreviousPage] = useState(false)
  const [disabledNextPage, setDisableNextPage] = useState(false)

  const maxPage = Math.ceil(totalElements / 10)


  async function onPrevClick() {
    if (currentPage > 1) {
      const newCurrentPage = currentPage - 1;
      setCurrentPage(newCurrentPage);
      setIsLoading(true);
      await onSubmit(term, newCurrentPage);
      setIsLoading(false);
      setDisableNextPage(newCurrentPage >= maxPage)
      setDisabledPreviousPage(newCurrentPage <= 1);
    }
  }

  async function onNextClick() {
    if (currentPage < maxPage) {
      const newCurrentPage = currentPage + 1;
      setCurrentPage(newCurrentPage);
      setIsLoading(true);
      await onSubmit(term, newCurrentPage);
      setIsLoading(false);
      setDisableNextPage(newCurrentPage >= maxPage);
      setDisabledPreviousPage(newCurrentPage <= 1);
    }
  }

  return (
      <div className="row" style={{marginTop: 26}}>
        <div className="col">
          <div id="pagination" className="d-flex justify-content-center">
            <button
                className={`pagination-item ${isLoading ? "disabled" : ""}`}
                onClick={onPrevClick} disabled={disabledPreviousPage}
            >
              <img src="/assets/img/icon_arrow-left.svg" alt={"arrow left icon"}/>
              <span>Previous</span>
            </button>

            <button
                className={`pagination-item ${isLoading ? "disabled" : ""}`}
                onClick={onNextClick} disabled={disabledNextPage}
            >
              <span>Next</span>
              <img src="/assets/img/icon_arrow-right.svg" alt={"arrow right icon"}/>
            </button>
          </div>
          <div className="col text-center">
            <p className={`h4 ${isLoading && "text-muted"}`}>
              current page {currentPage}
            </p>
          </div>
        </div>
      </div>
  );
}

Pagination.propTypes = {
  totalElements: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
  term: PropTypes.string.isRequired,
};
