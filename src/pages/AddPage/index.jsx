import React from "react";
import Add from "../../components/Add";
import { Helmet } from "react-helmet-async";

function AddPage() {
  return (
    <>
      <Helmet>
        <title>Pulse -Restaurant Add Page</title>
        <link
          rel="shortcut icon"
          href="https://preview.colorlib.com/theme/pulse/img/favicon.ico"
          type="image/x-icon"
        />
      </Helmet>
      <Add />
    </>
  );
}

export default AddPage;
