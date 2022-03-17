export function Filter() {
    return (
      <div className="drawer__box1">
        <div className="drawer__title">
          <h2>Fliters</h2>
          <div>
            <h5>
              <a href="/">RESET</a>
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
                  <a href="/alert-main.html">
                    <input type="radio" />
                    <span>Price High to low</span>
                  </a>
                </li>
              </div>
              <div id="header">
                <li>
                  <a href="/main-avatar.html">
                    <input type="radio" />
                    <span>Price Low to High</span>
                  </a>
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
                  <a href="/alert-main.html">
                    <input type="radio" />
                    <span>4⭐ & above</span>
                  </a>
                </li>
              </div>
              <div id="header">
                <li>
                  <a href="/main-avatar.html">
                    <input type="radio" />
                    <span>3⭐ & above</span>
                  </a>
                </li>
              </div>
              <div id="header">
                <li>
                  <a href="/main-avatar.html">
                    <input type="radio" />
                    <span>2⭐ & above</span>
                  </a>
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
                  <a href="/alert-main.html">
                    <input type="checkbox" />
                    <span>Action</span>
                  </a>
                </li>
              </div>
              <div id="header">
                <li>
                  <a href="/main-avatar.html">
                    <input type="checkbox" />
                    <span>Adventure</span>
                  </a>
                </li>
              </div>
              <div id="header">
                <li>
                  <a href="/main-avatar.html">
                    <input type="checkbox" />
                    <span>Strategy</span>
                  </a>
                </li>
              </div>
              <div id="header">
                <li>
                  <a href="/main-avatar.html">
                    <input type="checkbox" />
                    <span>Simulation</span>
                  </a>
                </li>
              </div>
              <div id="header">
                <li>
                  <a href="/main-avatar.html">
                    <input type="checkbox" />
                    <span>Sports</span>
                  </a>
                </li>
              </div>
              <div id="header">
                <li>
                  <a href="/main-avatar.html">
                    <input type="checkbox" />
                    <span>Open World</span>
                  </a>
                </li>
              </div>
              <div id="header">
                <li>
                  <a href="/main-avatar.html">
                    <input type="checkbox" />
                    <span>First Person</span>
                  </a>
                </li>
              </div>
              <hr />
            </ul>
          </div>
        </div>
      </div>
    );
  }
  