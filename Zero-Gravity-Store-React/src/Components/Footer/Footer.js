import "./Footer.css"
export function Footer() {
    return (
      <footer>
        <div>
          <div className="active-links">
            <ul className="footer">
              <li>
                {" "}
                <a className="action-links" href="https://twitter.com/je_et15">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                {" "}
                <a
                  className="action-links"
                  href="https://github.com/jeetbhalani15"
                >
                  <i
                    className="fa
                        fa-github"
                  ></i>
                </a>
              </li>
              <li>
                {" "}
                <a
                  className="action-links"
                  href="https://www.linkedin.com/in/jeetbhalani/"
                >
                  <i
                    className="fa
                        fa-linkedin"
                  ></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-txt">
            © 2022  |  0`Gravity Store All Rights Resevered.
          </div>
        </div>
      </footer>
    );
  }
  