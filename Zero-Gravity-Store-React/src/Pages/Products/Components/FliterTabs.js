import { useFliters } from "../../../Contexts/Filter-context";
export function FliterTabs() {
  const {
    filters: { price, ratings, sortBy, category },
    dispatch,
  } = useFliters();
  return (
    <div className="tabs">
      <div className="div">
        <h1>Sort By</h1>
      </div>
      <div className="sort-btn">
        <button
          onClick={() =>
            dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
          }
          className="tab-btn"
        >
          Price High to Low
        </button>
      </div>
      <div className="sort-btn">
        <button
          onClick={() =>
            dispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
          }
          className="tab-btn"
        >
          Price Low to High
        </button>
      </div>
      <div className="sort-btn">
        <button
          onClick={() =>
            dispatch({ type: "SORT", payload: "RATINGS_HIGH_TO_LOW" })
          }
          className="tab-btn"
        >
          Ratings High to Low
        </button>
      </div>
      <div
        onClick={() =>
          dispatch({ type: "SORT", payload: "RATINGS_LOW_TO_HIGH" })
        }
        className="sort-btn"
      >
        <button className="tab-btn">Ratings Low to High</button>
      </div>
    </div>
  );
}
