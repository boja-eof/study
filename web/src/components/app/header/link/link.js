import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";
import React from "react";
import style from "./base.module.scss";

const activeStyle = {
  backgroundImage: "linear-gradient(90deg, rgb(254, 182, 146) 10%, rgb(234, 84, 85) 100%)",
  borderRadius: "1.4em",
  boxShadow:
    "rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px, rgba(0, 0, 0, 0.2) 0px 3px 1px -2px",
};

const AppHeaderLink = (props) => {
  const { url, title } = props;
  return (
    <NavLink
      to={url}
      className={style.base}
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
    >
      {title}
    </NavLink>
  );
};

AppHeaderLink.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default AppHeaderLink;
