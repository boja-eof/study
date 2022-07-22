import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

import style from "./base.module.scss";
import AppHeaderInfoButton from "./button/button";

const AppHeaderInfo = (props) => {
  const { title, items } = props;
  return (
    <div className={style.base}>
      <Link to="/">
        <span>{title}</span>
      </Link>
      <AppHeaderInfoButton buttons={items} />
    </div>
  );
};

AppHeaderInfo.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.object.isRequired,
};

export default AppHeaderInfo;
