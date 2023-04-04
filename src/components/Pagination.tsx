import { type Dispatch, type SetStateAction } from 'react';

interface PaginationProps {
  postPerPage: number;
  totalPosts: number;
  paginate: (number: number) => void;
  currentPageNumber: number;
  setCurrentPageNumber: Dispatch<SetStateAction<number>>;
}

const Pagination = ({
  postPerPage,
  totalPosts,
  paginate,
  currentPageNumber,
  setCurrentPageNumber,
}: PaginationProps) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div className="my-4 w-full flex justify-between items-center gap-4">
      <button
        className="btn"
        type="button"
        onClick={() => setCurrentPageNumber((prev) => prev - 1)}
        disabled={currentPageNumber === 1}
      >
        Preview Page
      </button>
      {pageNumbers
        .slice(currentPageNumber - 1, currentPageNumber + 2)
        .map((number) => (
          <button
            key={number}
            type="button"
            className="btn"
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        ))}
      <button
        className="btn"
        type="button"
        onClick={() => setCurrentPageNumber((prev) => prev + 1)}
        disabled={currentPageNumber === 10}
      >
        Preview Page
      </button>
    </div>
  );
};
export default Pagination;
