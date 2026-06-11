import leftoutlined from "../assets/images/leftoutlined.svg";
import rightoutlined from "../assets/images/rightoutlined.svg";
function Pagination({page, setPage}){
    return(
        <div className="pagination">
            <button onClick={() => setPage(page - 1)}
                disabled= {page === 1}>
                <img src={leftoutlined} alt="left" className="arrow-img"/>
            </button>
            {[1,2,3,4,5,6].map((num) => (
                <span
                key={num}
                onClick={() => setPage(num)}
                className={page === num ? "active-page" : ""}
                style={{cursor: "pointer"}}
                >
                    {num}
                </span>
            ))}
            <button onClick={() => setPage(page + 1)}>
                <img src={rightoutlined} alt="right" className="arrow-img" />
            </button>
            
        </div>
    );
}
export default Pagination;