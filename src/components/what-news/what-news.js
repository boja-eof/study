import React from "react";
import ContentHeader from "./../content-header";
import { WhatsNew as cfg } from "../../settings";
import style from "./base.module.scss";

const WhatNews = () => {
  return (
    <>
      <ContentHeader {...cfg} />
      <div>
        <h1>WhatNews</h1>
      </div>
    </>
  );
};

export default WhatNews;
