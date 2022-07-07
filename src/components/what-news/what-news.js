import React from "react";
import ContentHeader from "./../content-header";
import { WhatsNew } from "../../settings";
import style from "./base.module.scss";

const WhatNews = () => {
  return (
    <>
      <ContentHeader {...WhatsNew} />
      <div>
        <h1>WhatNews</h1>
      </div>
    </>
  );
};

export default WhatNews;
