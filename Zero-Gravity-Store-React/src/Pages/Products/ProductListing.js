import { Footer } from "../../Components/Footer/Footer";
import { Navigation } from "../../Components/Navigation/Navigation";
import { useProduct } from "../../Contexts/Product-context";
import { Filter } from "./Components/Fliter";
import { FliterTabs } from "./Components/FliterTabs";
import { Products } from "./Components/Products";
import { Loader } from "../../Components/Loader/Loader";
import "./ProductListing.css";

export function ProductListing() {
  const {Loading}= useProduct();
  return (
    <>
      <div className="big-wrapper dark">
        {Loading && <Loader/>}
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
