import React, { useEffect } from "react";
import { loaded, loading } from "../../components/card/cardSlice";
import { useDispatch, useSelector } from "react-redux";

import Card from "../card";
import { Cards } from "../../db";
import ContentHeader from "./../content-header";
import { WhatsNew as cfg } from "../../settings";
import style from "./base.module.scss";

const WhatNews = () => {
  const { isLoading, errorMsg, items } = useSelector((state) => state.card);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loading());
    setTimeout(() => dispatch(loaded(Cards)), 1000);
  }, []);

  return (
    <>
      <ContentHeader {...cfg} />
      {isLoading ? (
        <div>loading...</div>
      ) : errorMsg ? (
        <div>{errorMsg}</div>
      ) : (
        <div className={style.base}>
          {items.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      )}
    </>
  );
};

export default WhatNews;
