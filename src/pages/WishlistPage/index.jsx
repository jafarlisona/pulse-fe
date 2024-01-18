import React from "react";
import Wishlist from "../../components/Wishlist";
import { Helmet } from "react-helmet-async";

function WishlistPage() {
  return (
    <>
      <Helmet>
        <title>Pulse -Restaurant Wishlist</title>
        <link
          rel="shortcut icon"
          href="https://preview.colorlib.com/theme/pulse/img/favicon.ico"
          type="image/x-icon"
        />
      </Helmet>
      <Wishlist />
    </>
  );
}

export default WishlistPage;
