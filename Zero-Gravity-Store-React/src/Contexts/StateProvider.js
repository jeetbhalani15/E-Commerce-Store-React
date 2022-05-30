import { AuthProvider } from "./Auth-context";
import { FilterProvider } from "./Filter-context";
import { ProductProvider } from "./Product-context";
import { CartProvider } from "./Cart-context";
import { WishlistProvider } from "./Wishlist-context";
import { AddressProvider } from "./Address-context";
import { OrderProvider } from "./Orders-context";

const StateProvider = ({ children }) => {
  return (
      <AuthProvider>
    <WishlistProvider>
    <CartProvider>
        <FilterProvider>
          <ProductProvider>
            <AddressProvider>
              <OrderProvider>
            {children}
            </OrderProvider>
            </AddressProvider>
            </ProductProvider>
        </FilterProvider>
    </CartProvider>
    </WishlistProvider>
      </AuthProvider>
  );
};

export default StateProvider;
