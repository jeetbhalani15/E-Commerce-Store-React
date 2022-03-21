import { Footer } from "../../Components/Footer/Footer";
import { Navigation } from "../../Components/Navigation/Navigation";
import { Filter } from "./Components/Fliter";
import { FliterTabs } from "./Components/FliterTabs";
import { Products } from "./Components/Products";
import "./ProductListing.css";

export function ProductListing() {
  return (
    <>
      <div className="big-wrapper dark">
        <Navigation />
        <FliterTabs />
        <main>
          <div className="drawer">
            <div className="drawer__nav">
              <Filter />
              <Products />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
