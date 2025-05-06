import { useFliters } from "../../../Contexts/Filter-context";
import { memo, useCallback, useMemo } from 'react';

export const Filter = memo(function Filter() {
  const {
    filters: { price, ratings, sortBy, category },
    dispatch,
  } = useFliters();

  // Memoize category values
  const {
    ACTION,
    ADVENTURE,
    STRATEGY,
    SIMULATION,
    SPORTS,
    OPEN_WORLD,
    FIRST_PERSON,
  } = useMemo(() => category, [category]);

  // Memoize handlers
  const handlePriceChange = useCallback((e) => {
    dispatch({ type: "PRICE", payload: e.target.value });
  }, [dispatch]);

  const handleCategoryChange = useCallback((e) => {
    dispatch({ type: "CATEGORY", payload: e.target.value });
  }, [dispatch]);

  const handleReset = useCallback(() => {
    dispatch({ type: "RESET" });
  }, [dispatch]);

  // Memoize calculations
  const calculatePricePercentage = useCallback((value) => {
    return ((value - 100) / (5000 - 100)) * 100;
  }, []);

  
  const formatPrice = useCallback((value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  }, []);

  // Memoize static data
  const priceMarks = useMemo(() => [
    { value: 100, label: '₹100' },
    { value: 1000, label: '₹1K' },
    { value: 2500, label: '₹2.5K' },
    { value: 5000, label: '₹5K' },
  ], []);

  const ratingOptions = useMemo(() => [
    { value: "4_&_ABOVE", label: "4 Stars & Above", rating: 4 },
    { value: "3_&_ABOVE", label: "3 Stars & Above", rating: 3 },
    { value: "2_&_ABOVE", label: "2 Stars & Above", rating: 2 }
  ], []);

  const genreOptions = useMemo(() => [
    { value: "ACTION", label: "Action", icon: "fa-gamepad", checked: ACTION },
    { value: "ADVENTURE", label: "Adventure", icon: "fa-compass", checked: ADVENTURE },
    { value: "STRATEGY", label: "Strategy", icon: "fa-chess-king", checked: STRATEGY },
    { value: "SIMULATION", label: "Simulation", icon: "fa-microchip", checked: SIMULATION },
    { value: "SPORTS", label: "Sports", icon: "fa-basketball-ball", checked: SPORTS },
    { value: "OPEN_WORLD", label: "Open World", icon: "fa-globe-americas", checked: OPEN_WORLD },
    { value: "FIRST_PERSON", label: "First Person", icon: "fa-eye", checked: FIRST_PERSON },
  ], [ACTION, ADVENTURE, STRATEGY, SIMULATION, SPORTS, OPEN_WORLD, FIRST_PERSON]);

  // Memoize renderStars function
  const renderStars = useCallback((rating) => {
    return [...Array(5)].map((_, index) => (
      <i
        key={index}
        className={`fa fa-star ${index < rating ? 'star-filled' : 'star-empty'}`}
        aria-hidden="true"
      ></i>
    ));
  }, []);

  const sortOptions = [
    {
      value: "PRICE_HIGH_TO_LOW",
      label: "Price: High to Low",
      icon: "fa-sort-amount-down"
    },
    {
      value: "PRICE_LOW_TO_HIGH",
      label: "Price: Low to High",
      icon: "fa-sort-amount-up"
    }
  ];

  return (
    <div className="filter-container">
      <div className="filter-header">
        <h2 className="filter-title">Filters</h2>
        <button
          className="filter-reset-btn"
          onClick={handleReset}
        >
          <i className="fa fa-refresh"></i>
          <span>Reset</span>
        </button>
      </div>

      <div className="filter-section">
        <div className="filter-section-header">
          <h3 className="filter-section-title">Price Range</h3>
          <span className="price-display">
            <i className="fa fa-inr"></i>
            {formatPrice(price)}
          </span>
        </div>
        <div className="price-slider-container">
          <input
            type="range"
            className="price-range"
            min="100"
            max="5000"
            step="100"
            value={price}
            onChange={handlePriceChange}
            style={{
              '--value-percent': `${calculatePricePercentage(price)}%`,
            }}
          />
          <div className="price-marks">
            {priceMarks.map(({ value, label }) => (
              <div 
                key={value} 
                className={`price-mark ${value <= price ? 'active' : ''}`}
                style={{ left: `${calculatePricePercentage(value)}%` }}
              >
                <div className="price-mark-line"></div>
                <span className="price-mark-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-section-header">
          <h3 className="filter-section-title">Sort By</h3>
          <span className="sort-indicator">
            <i className="fa fa-sort"></i>
          </span>
        </div>
        <div className="sort-options-grid">
          {sortOptions.map(({ value, label, icon }) => (
            <label 
              key={value} 
              className={`sort-option ${sortBy === value ? 'active' : ''}`}
            >
              <input
                type="radio"
                name="sort"
                value={value}
                checked={sortBy === value}
                onChange={() => dispatch({ type: "SORT", payload: value })}
              />
              <div className="sort-option-content">
                <i className={`fa ${icon}`}></i>
                <span className="sort-label">{label}</span>
                <div className="sort-check">
                  <i className="fa fa-check"></i>
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3 className="filter-section-title">Ratings</h3>
        <div className="ratings-grid">
          {ratingOptions.map(({ value, rating }) => (
            <label key={value} className={`rating-option ${ratings === value ? 'active' : ''}`}>
              <input
                type="radio"
                name="ratings"
                value={rating}
                checked={ratings === value}
                onChange={() => dispatch({ type: "RATINGS", payload: value })}
              />
              <div className="rating-content">
                <div className="stars-container">
                  {renderStars(rating)}
                </div>
                <span className="rating-label">&amp; above</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3 className="filter-section-title">Genre</h3>
        <div className="genre-grid">
          {genreOptions.map(({ value, label, icon, checked }) => (
            <label key={value} className={`genre-tag ${checked ? 'active' : ''}`}>
              <input
                type="checkbox"
                value={value}
                name="category"
                checked={checked}
                onChange={handleCategoryChange}
              />
              <i className={`fa ${icon}`}></i>
              <span>{label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
});
