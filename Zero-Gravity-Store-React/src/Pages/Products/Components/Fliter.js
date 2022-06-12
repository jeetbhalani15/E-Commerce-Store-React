import { useFliters } from "../../../Contexts/Filter-context";

export function Filter() {
  const {
    filters: { price, ratings, sortBy, category },
    dispatch,
  } = useFliters();
  const {
    ACTION,
    ADVENTURE,
    STRATEGY,
    SIMULATION,
    SPORTS,
    OPEN_WORLD,
    FIRST_PERSON,
  } = category;

  // handle price change
  const handlePriceChange = (e) => {
    dispatch({ type: "PRICE", payload: e.target.value });
  };

  // handle catergory change
  const handleCategoryChange = (e) => {
    dispatch({ type: "CATEGORY", payload: e.target.value });
  };

  return (
    <div className="drawer__box1">
      <div className="drawer__title">
        <h2>Fliters</h2>
        <div className="reset">
          <h5>
            <button
              className="reset-btn"
              onClick={() => dispatch({ type: "RESET" })}
            >
              RESET
            </button>
          </h5>
        </div>
      </div>
      <hr />

      <div className="drawer__items1">
        <div className="items">
          <h4>PRICE</h4>
        </div>
        <div className="box-slider slider-border">
          <div className="slider-amount">
            <span>₹350</span>
            <span>₹2250</span>
            <span>₹5000</span>
          </div>
          <div className="slider">
            <input
              className="slider"
              type="range"
              step="200"
              min="100"
              max="5000"
              value={price}
              onChange={handlePriceChange}
            />
          </div>
        </div>

        <div className="items">
          <h4>SORT</h4>
        </div>
        <div>
          <ul className="sidebar-list">
            <div id="header">
              <li>
                <input
                  type="radio"
                  name="price"
                  value="PRICE_HIGH_TO_LOW"
                  checked={sortBy === "PRICE_HIGH_TO_LOW"}
                  onChange={() =>
                    dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
                  }
                />
                <span>Price High to low</span>
              </li>
            </div>
            <div id="header">
              <li>
                <input
                  type="radio"
                  name="price"
                  value="PRICE_LOW_TO_HIGH"
                  checked={sortBy === "PRICE_LOW_TO_HIGH"}
                  onChange={() =>
                    dispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
                  }
                />
                <span>Price Low to High</span>
              </li>
            </div>

            <hr />
          </ul>
        </div>
        <div className="items">
          <h4>RATINGS</h4>
        </div>
        <div>
          <ul className="sidebar-list">
            <div id="header">
              <li>
                <input
                  type="radio"
                  name="ratings"
                  value="4"
                  checked={ratings === "4_&_ABOVE"}
                  onChange={() =>
                    dispatch({ type: "RATINGS", payload: "4_&_ABOVE" })
                  }
                />
                <span>4⭐ & above</span>
              </li>
            </div>
            <div id="header">
              <li>
                <input
                  type="radio"
                  name="ratings"
                  value="3"
                  checked={ratings === "3_&_ABOVE"}
                  onChange={() =>
                    dispatch({ type: "RATINGS", payload: "3_&_ABOVE" })
                  }
                />
                <span>3⭐ & above</span>
              </li>
            </div>
            <div id="header">
              <li>
                <input
                  type="radio"
                  name="ratings"
                  value="2"
                  checked={ratings === "2_&_ABOVE"}
                  onChange={() =>
                    dispatch({ type: "RATINGS", payload: "2_&_ABOVE" })
                  }
                />
                <span>2⭐ & above</span>
              </li>
            </div>

            <hr />
          </ul>
        </div>
        <div className="items">
          <h4>GENRE</h4>
        </div>
        <div>
          <ul className="sidebar-list">
            <div id="header">
              <li>
                <input
                  type="checkbox"
                  value="ACTION"
                  name="category"
                  checked={ACTION}
                  onChange={handleCategoryChange}
                />
                <span>Action</span>
              </li>
            </div>
            <div id="header">
              <li>
                <input
                  type="checkbox"
                  value="ADVENTURE"
                  name="category"
                  checked={ADVENTURE}
                  onChange={handleCategoryChange}
                />
                <span>Adventure</span>
              </li>
            </div>
            <div id="header">
              <li>
                <input
                  type="checkbox"
                  value="STRATEGY"
                  name="category"
                  checked={STRATEGY}
                  onChange={handleCategoryChange}
                />
                <span>Strategy</span>
              </li>
            </div>
            <div id="header">
              <li>
                <input
                  type="checkbox"
                  value="SIMULATION"
                  name="category"
                  checked={SIMULATION}
                  onChange={handleCategoryChange}
                />
                <span>Simulation</span>
              </li>
            </div>
            <div id="header">
              <li>
                <input
                  type="checkbox"
                  value="SPORTS"
                  name="category"
                  checked={SPORTS}
                  onChange={handleCategoryChange}
                />
                <span>Sports</span>
              </li>
            </div>
            <div id="header">
              <li>
                <input
                  type="checkbox"
                  value="OPEN_WORLD"
                  name="category"
                  checked={OPEN_WORLD}
                  onChange={handleCategoryChange}
                />
                <span>Open World</span>
              </li>
            </div>
            <div id="header">
              <li>
                <input
                  type="checkbox"
                  value="FIRST_PERSON"
                  name="category"
                  checked={FIRST_PERSON}
                  onChange={handleCategoryChange}
                />
                <span>First Person</span>
              </li>
            </div>
            <hr />
          </ul>
        </div>
      </div>
    </div>
  );
}
