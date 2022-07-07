import React from "react";
import { PropTypes } from "prop-types";
import AppHeaderLink from "./../link/link";
import style from "./base.module.scss";

const AppHeaderAction = (props) => {
  const { actions } = props;
  return (
    <div className={style.base}>
      {Object.entries(actions).map((en, index) => {
        return <AppHeaderLink key={index} url={en[0]} title={en[1]} />;
      })}
    </div>
  );
};

AppHeaderAction.propTypes = {
  actions: PropTypes.object.isRequired,
};

export default AppHeaderAction;
