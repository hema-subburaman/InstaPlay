function Pagination(){
    return(
        <div className="pagination">
            <button>{"<"}</button>
            <span className="active">1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <button>{">"}</button>
        </div>
    );
}
export default Pagination;