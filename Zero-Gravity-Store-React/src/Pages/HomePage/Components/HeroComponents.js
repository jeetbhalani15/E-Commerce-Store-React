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
} from "../../../Asserts/index";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import './HeroComponents.css';

function HeroComponents() {
  const [activeGame, setActiveGame] = useState(0);
  const playerRef = useRef(null);
  
  const featuredGames = [
    {
      id: 1,
      title: "God of War",
      subtitle: "Digital Deluxe Edition",
      price: "₹3,299",
      salePrice: "₹2,309",
      discount: "30%",
      image: "https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7",
      videoId: "HqQMh_tij0c", // God of War PC Features Trailer
      bgImage: "https://cdn2.unrealengine.com/egs-godofwar-santamonicastudio-s1-2560x1440-675bf00f9dd6.jpg"
    },
    {
      id: 2,
      title: "Far Cry 6",
      subtitle: "Standard Edition",
      price: "₹1,999",
      salePrice: "₹999",
      discount: "50%",
      image: "https://cdn1.epicgames.com/b4565296c22549e4830c13bc7506642d/offer/TETRA_PREORDER_STANDARD EDITION_EPIC_Store_Portrait_1200x1600-1200x1600-ca8b802ff13813c37a44ebf68d0946a2.png?h=854&resize=1&w=640",
      videoId: "-IJuKT1mHO8", // Far Cry 6 Official Reveal Trailer
      bgImage: "https://cdn2.unrealengine.com/fc6-store-landscape-2560x1440-2560x1440-c3bc544ee3bd.jpg"
    },
    {
      id: 3,
      title: "Grand Theft Auto V",
      subtitle: "Premium Edition",
      price: "₹2,999",
      salePrice: "₹1,499",
      discount: "50%",
      image: "https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_1200x1600_Portrait%20Store%20Banner-1200x1600-382243057711adf80322ed2aeea42191.jpg",
      videoId: "QkkoHAzjnUs", // GTA V Expanded & Enhanced Trailer
      bgImage: "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fgrand-theft-auto-v%2Fhome%2FGTAV_EGS_Artwork_1920x1080_Hero%20Carousel-1920x1080-aaa8e5c519bb3ecd76120345fe8a8d52c28e2ba8.jpg"
    },
    {
      id: 4,
      title: "The Last of Us™ Part II",
      subtitle: "Digital Deluxe Edition",
      price: "₹4,999",
      salePrice: "₹3,999",
      discount: "20%",
      image: "https://cdn1.epicgames.com/offer/7713e3fa4b234e0d8f553044205d53b6/EGS_TheLastofUsPartIIRemastered_NaughtyDogLLCNixxesSoftwareIronGalaxy_S2_1200x1600-2e13755a6b3fec2ee9dbcc231a1cf39c?resize=1&w=360&h=480",
      videoId: "II5UsqP2JAk",
      bgImage: "https://image.api.playstation.com/vulcan/ap/rnd/202311/0711/d0cd7652a8971b5b9c40f7e5d1c3dfb27c56ade693b14777.jpg"
    }
  ];

  useEffect(() => {
    // Load YouTube IFrame API if not already loaded
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    // Initialize or update player
    const initPlayer = () => {
      if (playerRef.current) {
        // If player exists, load new video
        playerRef.current.loadVideoById({
          videoId: featuredGames[activeGame].videoId,
          startSeconds: 0,
          suggestedQuality: 'hd1080'
        });
        // Force highest quality after video loads
        playerRef.current.setPlaybackQuality('hd1080');
      } else {
        // Create new player
        playerRef.current = new window.YT.Player('hero-video', {
          videoId: featuredGames[activeGame].videoId,
          playerVars: {
            autoplay: 1,
            mute: 1,
            controls: 0,
            showinfo: 0,
            loop: 1,
            playlist: featuredGames[activeGame].videoId,
            modestbranding: 1,
            vq: 'hd1080', // Request HD quality
            hd: 1, // Force HD mode
          },
          events: {
            onReady: (event) => {
              event.target.playVideo();
              // Force highest quality
              event.target.setPlaybackQuality('hd1080');
            },
            onPlaybackQualityChange: (event) => {
              // If quality changes to something lower, try to force HD again
              if (event.data !== 'hd1080') {
                event.target.setPlaybackQuality('hd1080');
              }
            }
          }
        });
      }
    };

    // Handle YouTube API ready state
    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      // If API is not ready, set up callback
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    // Cleanup
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [activeGame]); // Re-run when activeGame changes

  const handleThumbnailClick = (index) => {
    setActiveGame(index);
  };

  return (
    <main className="epic-main">
      {/* Hero Section */}
      <section className="hero-carousel">
        <div className="hero-background">
          <div id="hero-video"></div>
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-info">
            <h1 className="hero-title">{featuredGames[activeGame].title}</h1>
            <p className="hero-subtitle">{featuredGames[activeGame].subtitle}</p>
            <div className="hero-price">
              <span className="discount-tag">-{featuredGames[activeGame].discount}</span>
              <span className="original-price">{featuredGames[activeGame].price}</span>
              <span className="sale-price">{featuredGames[activeGame].salePrice}</span>
            </div>
            <div className="hero-actions">
              <Link to="/products" className="buy-now-btn">
                BUY NOW
              </Link>
              <button className="wishlist-btn">
                ADD TO WISHLIST
              </button>
            </div>
          </div>
          <div className="hero-thumbnails">
            {featuredGames.map((game, index) => (
              <div 
                key={game.id}
                className={`thumbnail ${activeGame === index ? 'active' : ''}`}
                onClick={() => handleThumbnailClick(index)}
              >
                <img src={game.image} alt={game.title} />
                <div className="thumbnail-overlay"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Games Grid Section */}
      <section className="games-grid-section">
        <div className="section-header">
          <h2>Games on Sale</h2>
          <Link to="/products" className="view-all">View All</Link>
        </div>
        <div className="games-grid">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="game-card">
              <div className="game-image">
                <img src={featuredGames[index % 5].image} alt={featuredGames[index % 5].title} />
                <div className="game-overlay">
                  <span className="discount-badge">-{featuredGames[index % 5].discount}</span>
                </div>
              </div>
              <div className="game-info">
                <h3>{featuredGames[index % 5].title}</h3>
                <div className="price-info">
                  <span className="discount-tag">-{featuredGames[index % 5].discount}</span>
                  <span className="original-price">{featuredGames[index % 5].price}</span>
                  <span className="sale-price">{featuredGames[index % 5].salePrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Platforms Section */}
      <section className="platforms-section">
        <h2>Available Platforms</h2>
        <div className="platforms-grid">
          <div className="platform-card">
            <img src={pc_game_logo} alt="PC Gaming" />
          </div>
          <div className="platform-card">
            <img src={ps_logo} alt="PlayStation" />
          </div>
          <div className="platform-card">
            <img src={xbox_logo} alt="Xbox" />
          </div>
        </div>
      </section>

      {/* Featured Publishers */}
      <section className="publishers-section">
        <h2>Featured Publishers</h2>
        <div className="publishers-grid">
          {[
            { logo: valo_logo, name: "Valorant" },
            { logo: fh_logo, name: "Forza" },
            { logo: pubg_logo, name: "PUBG" },
            { logo: rockstar_logo, name: "Rockstar" },
            { logo: ue_logo, name: "Unreal Engine" }
          ].map((publisher, index) => (
            <div key={index} className="publisher-card">
              <img src={publisher.logo} alt={publisher.name} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export { HeroComponents };
