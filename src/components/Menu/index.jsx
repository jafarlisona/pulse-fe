import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { WishlistContext } from "../../context/wishlistProvider";
function Menu() {
  const { wishlist, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);
  const [menu, setMenu] = useState([]);
  const [sortedProperty, setSortedProperty] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/menu/")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);
  function checkType(value) {
    if (typeof value ==="string") {
      return value.toLocaleLowerCase()
    } else{
      return value
    }
  }

  return (
    <section id="menu">
      <div className="container">
        <div className="menu-title"></div>
        <div className="menu-buttons">
          <button onClick={() => setSortedProperty(null)}>Default</button>
          <button
            onClick={() => setSortedProperty({ property: "name", asc: true })}
          >
            Name(A-Z)
          </button>
          <button
            onClick={() => setSortedProperty({ property: "name", asc: false })}
          >
            Name(Z-A)
          </button>
          <button
            onClick={() => setSortedProperty({ property: "price", asc: true })}
          >
            Price(Low-High)
          </button>
          <button
            onClick={() => setSortedProperty({ property: "price", asc: false })}
          >
            Price(High-Low)
          </button>
        </div>
        <div className="menu-content">
          <div className="cards">
            {[...menu]
              .sort((a, b) => {
                if (sortedProperty && sortedProperty.asc) {
                  return checkType(a[sortedProperty.property]) > checkType(b[sortedProperty.property])
                    ? 1
                    : checkType(b[sortedProperty.property]) > checkType(a[sortedProperty.property])
                    ? -1
                    : 0;
                } else if (sortedProperty && sortedProperty.asc === false) {
                  return checkType(a[sortedProperty.property]) < checkType(b[sortedProperty.property])
                    ? 1
                    : checkType(b[sortedProperty.property]) < checkType(a[sortedProperty.property])
                    ? -1
                    : 0;
                } else{
                  return 0
                }
              })
              .map((x) => (
                <div className="card" key={x._id}>
                  <h3>{x.name}</h3>
                  <div className="content">
                    <p>{x.description}</p>
                    <div className="line"></div>
                    <span>${x.price.toFixed(2)}</span>
                  </div>
                  <div className="card-buttons">
                    <Link to={"/detail/" + x._id}>View</Link>
                    {wishlist.some((item) => item._id === x._id) ? (
                      <i
                        className="fa-solid fa-heart"
                        onClick={() => removeFromWishlist(x)}
                      ></i>
                    ) : (
                      <i
                        className="fa-regular fa-heart"
                        onClick={() => addToWishlist(x)}
                      ></i>
                    )}
                  </div>
                </div>
              ))}
          </div>
          <Link to="#">See more</Link>
        </div>
      </div>
    </section>
  );
}

export default Menu;
