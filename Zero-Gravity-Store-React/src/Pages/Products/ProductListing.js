import { Footer } from "../../Components/Footer/Footer";
import { Navigation } from "../../Components/Navigation/Navigation";
import { useProduct } from "../../Contexts/Product-context";
import { Filter } from "./Components/Fliter";
import { FliterTabs } from "./Components/FliterTabs";
import { Products } from "./Components/Products";
import { Loader } from "../../Components/Loader/Loader";
import "./ProductListing.css";
import { useFliters } from "../../Contexts/Filter-context";
import { useAuth } from "../../Contexts/Auth-context";

export function ProductListing() {
  const {Loading}= useProduct();
  const {showFilter} = useFliters();
  const {hideSearch,setHideSearch}=useAuth();
  let hideMenu = true
  return (
    <>
      <div className="big-wrapper dark">
        {Loading && <Loader/>}
        <Navigation hideMenu={hideMenu} />
        <FliterTabs />
        <main>
          <div className="drawer">
            <div className="drawer__nav">
              { showFilter && <Filter />}
              <Products />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
