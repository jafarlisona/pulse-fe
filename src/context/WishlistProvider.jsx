import React, { createContext } from "react";
import useLocalStorage from "../hook/useLocalStorage";
export const WishlistContext = createContext();
function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useLocalStorage("wishlist", []);
  function addToWishlist(item) {
    if (wishlist.find((x) => x._id === item._id)) {
      setWishlist(wishlist.filter((x) => x._id !== item._id));
    } else {
      setWishlist([...wishlist, item]);
    }
  }
  function removeFromWishlist(item) {
    setWishlist(wishlist.filter((x) => x._id !== item._id));
  }
  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistProvider;
