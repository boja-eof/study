import { PropTypes } from "prop-types";
import React from "react";
import style from "./base.module.scss";

const ContentHeader = (props) => {
  const { title, data } = props;
  return (
    <div className={style.base}>
      <div className={style.wrapper}>
        <h3>{title}</h3>
        <p>{data}</p>
      </div>
    </div>
  );
};

ContentHeader.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

export default ContentHeader;
