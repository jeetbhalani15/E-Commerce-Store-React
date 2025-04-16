import { useFliters } from "../../../Contexts/Filter-context";

export function FliterTabs() {
  const {
    filters: { sortBy },
    dispatch,
  } = useFliters();

  const handleSort = (value) => {
    dispatch({ type: "SORT", payload: value });
  };

  return (
    <div className="sort-container">
      <div className="sort-header">
        <h2 className="sort-title">Sort By</h2>
        <div className="sort-divider"></div>
      </div>
      
      <div className="sort-options">
        <button
          onClick={() => handleSort("PRICE_HIGH_TO_LOW")}
          className={`sort-button ${sortBy === "PRICE_HIGH_TO_LOW" ? "active" : ""}`}
        >
          <i className="fa fa-arrow-down"></i>
          <span>Price: High to Low</span>
        </button>

        <button
          onClick={() => handleSort("PRICE_LOW_TO_HIGH")}
          className={`sort-button ${sortBy === "PRICE_LOW_TO_HIGH" ? "active" : ""}`}
        >
          <i className="fa fa-arrow-up"></i>
          <span>Price: Low to High</span>
        </button>

        <button
          onClick={() => handleSort("RATINGS_HIGH_TO_LOW")}
          className={`sort-button ${sortBy === "RATINGS_HIGH_TO_LOW" ? "active" : ""}`}
        >
          <i className="fa fa-star"></i>
          <span>Ratings: High to Low</span>
        </button>

        <button
          onClick={() => handleSort("RATINGS_LOW_TO_HIGH")}
          className={`sort-button ${sortBy === "RATINGS_LOW_TO_HIGH" ? "active" : ""}`}
        >
          <i className="fa fa-star-o"></i>
          <span>Ratings: Low to High</span>
        </button>
      </div>
    </div>
  );
}
