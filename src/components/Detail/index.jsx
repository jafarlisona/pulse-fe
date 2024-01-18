import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import { WishlistContext } from "../../context/wishlistProvider";
function Detail() {
  const { id } = useParams();
  const [menuItem, setMenuItem] = useState([]);
  const { wishlist, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);

  useEffect(() => {
    fetch("http://localhost:3000/menu/" + id)
      .then((res) => res.json())
      .then((data) => setMenuItem(data));
  }, []);
  function getPrice(price) {
    const myPrice = parseInt(price).toFixed(2);
    return myPrice;
  }
  return (
    <section id="detail">
      <div className="container">
        <div className="image">
          <img src={menuItem.image} alt="" />
        </div>
        <div className="content">
          <h1>{menuItem.name}</h1>
          <p>{menuItem.description}</p>
          <span>${getPrice(menuItem.price)}</span>
          <div className="icons">
            {wishlist.some((item) => item._id === menuItem._id) ? (
              <i
                className="fa-solid fa-heart"
                onClick={() => removeFromWishlist(menuItem)}
              ></i>
            ) : (
              <i
                className="fa-regular fa-heart"
                onClick={() => addToWishlist(menuItem)}
              ></i>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Detail;
