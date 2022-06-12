import "./Products.css";
import { useProduct } from "../../../Contexts/Product-context";
import { useFliters } from "../../../Contexts/Filter-context";
import {
  filterByCategory,
  filterByPrice,
  filterByRatings,
  searchFromProducts,
  SortProducts,
} from "../../../utils";
import { Cards } from "./Cards";
import { Loader } from "../../../Components/Loader/Loader";

export function Products() {
  const { productData, Loading, Error } = useProduct();
  const { filters } = useFliters();

  // all filter states
  const searchResult = searchFromProducts(productData, filters.searchQuery);
  const filteredCategory = filterByCategory(searchResult, filters.category);
  const filteredRatings = filterByRatings(filteredCategory, filters.ratings);
  const filteredPrice = filterByPrice(filteredRatings, filters.price);
  const finalFiltertedProduct = SortProducts(filteredPrice, filters.sortBy);

  return (
    <div className="product-space">
      {Error && <h1 className="error-msg">{Error}</h1>}
      {finalFiltertedProduct.map((product) => (
        <Cards key={product._id} product={product} />
      ))}
      ;
    </div>
  );
}
