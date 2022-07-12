import AppHeaderAction from "./action/action";
import AppHeaderInfo from "./info/info";
import { PropTypes } from "prop-types";
import React from "react";
import style from "./base.module.scss";

const AppHeader = (props) => {
  const { title, items, actions } = props.config;
  return (
    <header className={style.base}>
      <div>
        <AppHeaderInfo title={title} items={items} />
        <AppHeaderAction actions={actions} />
      </div>
    </header>
  );
};

AppHeader.propTypes = {
  config: PropTypes.shape({
    title: PropTypes.string.isRequired,
    items: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  }),
};

export default AppHeader;
