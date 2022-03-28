import { AuthProvider } from "./Auth-context";
import { FilterProvider } from "./Filter-context";
import { ProductProvider } from "./Product-context";
import { CartProvider } from "./Cart-context";
import { WishlistProvider } from "./Wishlist-context";

const StateProvider = ({ children }) => {
  return (
      <AuthProvider>
    <WishlistProvider>
    <CartProvider>
        <FilterProvider>
          <ProductProvider>{children}</ProductProvider>
        </FilterProvider>
    </CartProvider>
    </WishlistProvider>
      </AuthProvider>
  );
};

export default StateProvider;
