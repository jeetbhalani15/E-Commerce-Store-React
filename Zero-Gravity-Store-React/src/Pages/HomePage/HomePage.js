import { useState } from "react";
import {Loader} from "../../Components/Loader/Loader";
import { Footer } from "../../Components/Footer/Footer";
import { Navigation } from "../../Components/Navigation/Navigation";
import { HeroComponents } from "./Components/HeroComponents";
import "./HomePage.css";
import { BarLoader, RingLoader, RiseLoader } from "react-spinners";
import { useAuth } from "../../Contexts/Auth-context";

export function HomePage() {
  const [loading, setLoading] = useState(true);
  const {hideSearch,setHideSearch} = useAuth();

  setTimeout(()=>{
    setLoading(false)
  },4000);
  return (
    <>
    <div className="big-wrapper dark">
      {loading && <Loader />}
      <Navigation hideSearch={hideSearch} />
      <HeroComponents />
      <Footer />
    </div>
    </>
  );
}



