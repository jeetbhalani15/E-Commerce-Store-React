import {
    hero_img,
    pc_game_logo,
    ps_logo,
    xbox_logo,
    valo_logo,
    fh_logo,
    pubg_logo,
    rockstar_logo,
    ue_logo,
  }  from "../../../Asserts/index"
 import {Link} from "react-router-dom";

 function HeroComponents (){
     
    return(
        <main>
          <div className="landing-box">
        <div className="landing-img">
                <img className="hero-img" src={hero_img} alt="logo" />
          <div className="hero-title">
                <h1 className="title-style">WE PLAY GAMES</h1>
                <small className="word-gap">UTMOST QUALITY IS OUR MOTIVE</small>
                <button className="hero-btn btn-solid"><Link to="/products">SHOP NOW</Link></button>
          </div>
        </div>
        <div className="my-card">
          <div><h1 className="cart-heading">Games on Sale</h1></div>
         <div className="card-content">
           <div className="card-vertical-box flex card-border">
               <div className="vertical-card flex">
                   <div className="card-top">
                       <img className="card-img" src="https://cdn1.epicgames.com/b4565296c22549e4830c13bc7506642d/offer/TETRA_PREORDER_STANDARD EDITION_EPIC_Store_Portrait_1200x1600-1200x1600-ca8b802ff13813c37a44ebf68d0946a2.png?h=854&resize=1&w=640" alt=""/>
                   </div>
                   <span className="floating-icon"><i className="fa fa-plus-circle bg"></i></span>
                   <div className="card-end flex">
                       <div className="card-body">Far Cry 6 Standard Edition</div>
                       <div className="card-price my"><span className="tag">-50%</span ><span className="line">₹1,999</span ><span className="bold">₹999</span></div>
                      <div> <Link to="/products"><button className="card-btn">Buy Now</button></Link></div>
                   </div>
               </div>
           </div>
           <div className="card-vertical-box flex card-border">
               <div className="vertical-card flex">
                   <div className="card-top">
                       <img className="card-img" src="https://cdn1.epicgames.com/b4565296c22549e4830c13bc7506642d/offer/TETRA_PREORDER_STANDARD EDITION_EPIC_Store_Portrait_1200x1600-1200x1600-ca8b802ff13813c37a44ebf68d0946a2.png?h=854&resize=1&w=640" alt=""/>
                   </div>
                   <span className="floating-icon"><i className="fa fa-plus-circle bg"></i></span>
                   <div className="card-end flex">
                     <div className="card-body">Far Cry 6 Standard Edition</div>
                     <div className="card-price my"><span className="tag">-50%</span ><span className="line">₹1,999</span ><span className="bold">₹999</span></div>
                     <div> <Link to="/products"><button className="card-btn">Buy Now</button></Link></div>

                   </div>
               </div>
              </div>
           <div className="card-vertical-box flex card-border">
               <div className="vertical-card flex">
                   <div className="card-top">
                       <img className="card-img" src="https://cdn1.epicgames.com/b4565296c22549e4830c13bc7506642d/offer/TETRA_PREORDER_STANDARD EDITION_EPIC_Store_Portrait_1200x1600-1200x1600-ca8b802ff13813c37a44ebf68d0946a2.png?h=854&resize=1&w=640" alt=""/>
                   </div>
                   <span className="floating-icon"><i className="fa fa-plus-circle bg"></i></span>
                   <div className="card-end flex">
                       <div className="card-body">Far Cry 6 Standard Edition</div>
                       <div className="card-price my"><span className="tag">-50%</span ><span className="line">₹1,999</span ><span className="bold">₹999</span></div>
                       <div> <Link to="/products"><button className="card-btn">Buy Now</button></Link></div>

                    </div>
                  </div>
                </div>
                <div className="card-vertical-box flex card-border">
               <div className="vertical-card flex">
                   <div className="card-top">
                       <img className="card-img" src="https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640" alt=""/>
                      </div>
                      <span className="floating-icon"><i className="fa fa-plus-circle bg"></i></span>
                      <div className="card-end flex">
                       <div className="card-body">Sifu</div>
                       <div className="card-price my"><span className="tag">-50%</span ><span className="line">₹1,999</span ><span className="bold">₹999</span></div>
                       <div> <Link to="/products"> <button className="card-btn">Buy Now</button></Link></div>

                   </div>
                  </div>
                </div>
                  <div className="hero-catergory">
                      <div><h1 className="cart-heading">Plateforms</h1></div>
                      <div className="genre">
                      <div className="genre-items">
                          <img className="genre-logo" src={pc_game_logo} alt="logo"/>
                      </div>
                      <div className="genre-items">
                          <img className="genre-logo" src={ps_logo} alt="logo"/>
                      </div>
                      <div className="genre-items">
                          <img className="genre-logo" src={xbox_logo} alt="logo"/>
                      </div>
                  </div>
                  </div>
                  <div className="hero-catergory">
                      <div><h1 className="cart-heading">Featured Games</h1></div>
                      <div className="genre">
                      <div className="partner-items">
                          <img className="partner-logo" src={valo_logo} alt="logo"/>
                      </div>
                      <div className="partner-items">
                          <img className="partner-logo" src={fh_logo} alt="logo"/>
                      </div>
                      <div className="partner-items">
                          <img className="partner-logo" src={pubg_logo} alt="logo"/>
                      </div>
                      <div className="partner-items">
                          <img className="partner-logo" src={rockstar_logo} alt="logo"/>
                      </div>
                      <div className="partner-items">
                          <img className="partner-logo" src={ue_logo} alt="logo"/>
                      </div>
                  </div>
                  </div>
                  
           
          </div>
        </div>
    </div>
      </main>
    )
};

export { HeroComponents };