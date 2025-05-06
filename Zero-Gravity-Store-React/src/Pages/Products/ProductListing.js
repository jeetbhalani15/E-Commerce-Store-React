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
import ErrorBoundary from "../../Components/ErrorBoundary/ErrorBoundary";

// Wrap critical components with ErrorBoundary
const SafeProducts = () => (
  <ErrorBoundary>
    <Products />
  </ErrorBoundary>
);

const SafeFilter = () => (
  <ErrorBoundary>
    <Filter />
  </ErrorBoundary>
);

const SafeFilterTabs = () => (
  <ErrorBoundary>
    <FliterTabs />
  </ErrorBoundary>
);

export function ProductListing() {
  const { Loading } = useProduct();
  const { showFilter } = useFliters();
  const { hideSearch, setHideSearch } = useAuth();
  let hideMenu = true;

  return (
    <ErrorBoundary>
      <div className="big-wrapper dark">
        {Loading && <Loader />}
        <Navigation hideMenu={hideMenu} />
        <SafeFilterTabs />
        <main>
          <div className="drawer">
            <div className="drawer__nav">
               {showFilter && <SafeFilter />}
               <SafeProducts />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
