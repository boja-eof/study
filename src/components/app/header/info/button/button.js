import AppHeaderLink from "../../link/link";
import { PropTypes } from "prop-types";
import React from "react";
import style from "./base.module.scss";

const AppHeaderInfoButton = (props) => {
  const { buttons } = props;
  return (
    <div className={style.base}>
      {Object.entries(buttons).map((en, index) => {
        return <AppHeaderLink key={index} url={en[0]} title={en[1]} />;
      })}
    </div>
  );
};

AppHeaderInfoButton.propTypes = {
  buttons: PropTypes.object.isRequired,
};

export default AppHeaderInfoButton;
