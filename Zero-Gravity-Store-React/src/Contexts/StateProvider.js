import { FilterProvider } from "./Filter-context";
import { ProductProvider } from "./Product-context";

const StateProvider = ({ children }) => {
  return (
    <FilterProvider>
      <ProductProvider>{children}</ProductProvider>
    </FilterProvider>
  );
};

export default StateProvider;
