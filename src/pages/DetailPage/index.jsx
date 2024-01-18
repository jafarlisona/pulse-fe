import React from "react";
import Detail from "../../components/Detail";
import { Helmet } from "react-helmet-async";

function DetailPage() {
  return (
    <>
      <Helmet>
        <title>Pulse -Restaurant Detail Page</title>
        <link
          rel="shortcut icon"
          href="https://preview.colorlib.com/theme/pulse/img/favicon.ico"
          type="image/x-icon"
        />
      </Helmet>
      <Detail />
    </>
  );
}

export default DetailPage;
