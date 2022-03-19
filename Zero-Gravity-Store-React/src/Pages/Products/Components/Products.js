import "./Products.css";
import {Link} from "react-router-dom"
export function Products() {
    return (
        <div className="product-space">
        <div className="card-vertical-box flex card-border">
          <div className="vertical-card flex">
            <div className="card-top">
              <img className="card-img"
                src="https://cdn1.epicgames.com/b4565296c22549e4830c13bc7506642d/offer/TETRA_PREORDER_STANDARD
                EDITION_EPIC_Store_Portrait_1200x1600-1200x1600-ca8b802ff13813c37a44ebf68d0946a2.png?h=854&resize=1&w=640"
                alt=""/>
            </div>
            <span className="floating-icon"><i className="fa fa-plus-circle bg"></i></span>
            <div className="card-end flex">
              <div className="card-body">Far Cry 6 Standard Edition</div>
              <div className="price my"><span className="tag">-50%</span><span
                  className="line">₹1,999</span><span
                  className="bold">₹999</span></div>
              <div> <Link to="/Cart"> <button
                    className="card-btn">Add To Cart</button></Link></div>

            </div>
          </div>
        </div>
        <div className="card-vertical-box flex card-border">
          <div className="vertical-card flex">
            <div className="card-top">
              <img className="card-img"
                src="https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7?h=854&resize=1&w=640"
                alt=""/>

            </div>
            <span className="floating-icon"><i className="fa fa-plus-circle bg"></i></span>
            <div className="card-end flex">
              <div className="card-body">God Of War</div>
              <div className="price my"><span className="tag">-50%</span><span
                  className="line">₹1,999</span><span
                  className="bold">₹999</span></div>
              <div> <Link to="/Cart"> <button
                    className="card-btn">Add To Cart</button></Link></div>
            </div>
          </div>
        </div>
        <div className="card-vertical-box flex card-border">
          <div className="vertical-card flex">
            <div className="card-top">
              <img className="card-img"
                src="https://cdn1.epicgames.com/salesEvent/salesEvent/EN_R6E_STD_EPIC_Store
                Portrait_1200x1600_UK_1200x1600-9859512196094e740761af80c09a41d6?h=854&resize=1&w=640"/>
            </div>
            <span className="floating-icon"><i className="fa fa-plus-circle bg"></i></span>
            <div className="card-end flex">
              <div className="card-body">Tom Clancy's Rainbow Six Extraction</div>
              <div className="price my"><span className="tag">-50%</span><span
                  className="line">₹1,999</span><span
                  className="bold">₹999</span></div>
              <div> <Link to="/Cart"> <button
                    className="card-btn">Add To Cart</button></Link></div>
            </div>
          </div>
        </div>
        </div>
    );
    }