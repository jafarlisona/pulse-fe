import React, { useContext } from "react";
import "./index.scss";
import { WishlistContext } from "../../context/wishlistProvider";
function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  return (
    <section id="wishlist">
      <div className="container">
        {wishlist.map((x) => (
          <div className="card" key={x._id}>
            <div className="image">
              <img src={x.image} alt="" />
            </div>
            <h2>{x.name}</h2>
            <p>{x.description}</p>
            <span>${x.price.toFixed(2)}</span>
            {wishlist.some((item) => item._id === x._id) && (
              <i
                className="fa-solid fa-heart"
                onClick={() => removeFromWishlist(x)}
              ></i>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Wishlist;
