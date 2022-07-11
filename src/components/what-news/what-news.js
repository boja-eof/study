import Card from "../card";
import ContentHeader from "./../content-header";
import React from "react";
import { WhatsNew as cfg } from "../../settings";
import style from "./base.module.scss";
import { useSelector } from "react-redux";

const WhatNews = () => {
  const { isLoading, errorMsg, items } = useSelector((state) => state.card);

  return (
    <>
      <ContentHeader {...cfg} />
      {isLoading ? (
        <div>loading...</div>
      ) : errorMsg ? (
        <div>{errorMsg}</div>
      ) : (
        <div className={style.base}>
          {items.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      )}
    </>
  );
};

export default WhatNews;
