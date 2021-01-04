import React from "react";
import Page from "react-page-loading";

function Loadpage() {
  return (
    <>
      <Page loader={"spin"} color={"#222831"} size={15} duration={3}></Page>
    </>
  );
}

export default Loadpage;
