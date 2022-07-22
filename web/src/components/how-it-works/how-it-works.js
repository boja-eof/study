import ContentHeader from "./../content-header";
import React from "react";
import { HowItWorks as cfg } from "../../settings";

const HowItWorks = () => {
  return (
    <>
      <ContentHeader {...cfg} />
      <div>
        <h1>HowItWorks</h1>
      </div>
    </>
  );
};

export default HowItWorks;
