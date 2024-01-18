import React from "react";
import { Helmet } from "react-helmet-async";
import Contact from "../../components/Contact";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Services from "../../components/Services";
import Testimonials from "../../components/Testimonials";
import Welcome from "../../components/Welcome";

function Home() {
  return (
    <>
      <Helmet>
        <title>Pulse -Restaurant Home</title>
        <link
          rel="shortcut icon"
          href="https://preview.colorlib.com/theme/pulse/img/favicon.ico"
          type="image/x-icon"
        />
      </Helmet>
      <Header />
      <Welcome />
      <Testimonials />
      <Services />
      <Menu />
      <Contact />
    </>
  );
}

export default Home;
