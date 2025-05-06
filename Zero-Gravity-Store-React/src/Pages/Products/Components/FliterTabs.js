import { useFliters } from "../../../Contexts/Filter-context";
import { memo, useCallback, useMemo } from 'react';

export const FliterTabs = memo(function FliterTabs() {
  const {
    filters: { sortBy },
    dispatch,
  } = useFliters();

  const handleSort = useCallback((value) => {
    dispatch({ type: "SORT", payload: value });
  }, [dispatch]);

  const sortOptions = useMemo(() => [
    {
      value: "PRICE_HIGH_TO_LOW",
      label: "Price: High to Low",
      icon: "fa-arrow-down"
    },
    {
      value: "PRICE_LOW_TO_HIGH",
      label: "Price: Low to High",
      icon: "fa-arrow-up"
    },
    {
      value: "RATINGS_HIGH_TO_LOW",
      label: "Ratings: High to Low",
      icon: "fa-star"
    },
    {
      value: "RATINGS_LOW_TO_HIGH",
      label: "Ratings: Low to High",
      icon: "fa-star-o"
    }
  ], []);

  return (
    <div className="sort-container">
      <div className="sort-header">
        <h2 className="sort-title">Sort By</h2>
        <div className="sort-divider"></div>
      </div>
      
      <div className="sort-options">
        {sortOptions.map(({ value, label, icon }) => (
          <button
            key={value}
            onClick={() => handleSort(value)}
            className={`sort-button ${sortBy === value ? "active" : ""}`}
          >
             <i className={`fa ${icon}`}></i>
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
});
