import { AuthProvider } from "./Auth-context";
import { FilterProvider } from "./Filter-context";
import { ProductProvider } from "./Product-context";
import { CartProvider } from "./Cart-context";

const StateProvider = ({ children }) => {
  return (
    <CartProvider>
      <AuthProvider>
        <FilterProvider>
          <ProductProvider>{children}</ProductProvider>
        </FilterProvider>
      </AuthProvider>
    </CartProvider>
  );
};

export default StateProvider;
