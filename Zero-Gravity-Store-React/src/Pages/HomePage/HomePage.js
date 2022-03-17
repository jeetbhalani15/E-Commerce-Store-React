import { Footer } from "../../Components/Footer/Footer";
import { Navigation } from "../../Components/Navigation/Navigation";
import { HeroComponents } from "./Components/HeroComponents";
import "./HomePage.css";
export function HomePage(){
    return(

        <div className="big-wrapper dark">
          <Navigation />

          <HeroComponents/>

          <Footer />
      </div>
    );
}