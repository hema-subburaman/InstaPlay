import leftoutlined from "../assets/images/leftoutlined.svg";
import rightoutlined from "../assets/images/rightoutlined.svg";
function Pagination(){
    return(
        <div className="pagination">
            <button><img src={leftoutlined} alt="left" className="arrow-img"/></button>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <button><img src={rightoutlined} alt="right" className="arrow-img" /></button>
        </div>
    );
}
export default Pagination;