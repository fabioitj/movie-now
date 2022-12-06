import "./pagination.css"

const Pagination = ({page, setPage}) => {
    return (
        <div className="pagination">
            <button className="btn-prev" disabled={page === 1} onClick={() => { setPage(page - 1)}}><img className="image-prev" src={require("./../../images/left-button.png")} alt="Previous Button"/></button>
            <h3 className="actual-page">{page}</h3>
            <button className="btn-next" onClick={() => { setPage(page + 1)}}><img className="image-next" src={require("./../../images/right-button.png")} alt="Next Button"/></button>
        </div>
    );
}

export default Pagination;