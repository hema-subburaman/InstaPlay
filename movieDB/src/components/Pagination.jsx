import leftoutlined from "../assets/images/leftoutlined.svg";
import rightoutlined from "../assets/images/rightoutlined.svg";

function Pagination({ page, setPage, totalPages }) {
  const getPages = () => {
    const pages = [];

    // if (page <= 3) {
    //   pages.push(1, 2, 3, 4, 5, 6, "...");
    // } else {
    //   pages.push(
    //     "...",
    //     page - 4,
    //     page - 3,
    //     page - 2,
    //     page - 1,
    //     page,
    //     page + 1,
    //     page + 2,
    //     page + 3,
    //     page + 4,
    //     "...",
    //   );
    // }

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="pagination">
      <img
        src={leftoutlined}
        alt="left"
        className={`arrow-img ${page === 1 ? "disabled-arrow" : ""}`}
        onClick={() => page > 1 && setPage(page - 1)}
      />

      {getPages().map((item, index) => (
        <span
          key={index}
          onClick={() => typeof item === "number" && setPage(item)}
          className={page === item ? "active-page" : ""}
        >
          {item}
        </span>
      ))}

      <img
        src={rightoutlined}
        alt="right"
        className={`arrow-img ${page === totalPages ? "disabled-arrow" : ""}`}
        onClick={() => page < totalPages && setPage(page + 1)}
      />
    </div>
  );
}

export default Pagination;
