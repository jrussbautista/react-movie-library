import React from "react";
import { Helmet } from "react-helmet";

export default ({ title }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
  );
};
