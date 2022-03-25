import { AuthProvider } from "./Auth-context";
import { FilterProvider } from "./Filter-context";
import { ProductProvider } from "./Product-context";

const StateProvider = ({ children }) => {
  return (
    <AuthProvider>
    <FilterProvider>
      <ProductProvider>{children}</ProductProvider>
    </FilterProvider>
    </AuthProvider>
  );
};

export default StateProvider;
