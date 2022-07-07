import React from "react";
import AppHeaderInfo from "./info/info";
import AppHeaderAction from "./action/action";
import { PropTypes } from "prop-types";

import "./header.css";

const AppHeader = (props) => {
  const { title, items, actions } = props.config;
  return (
    <header className="header">
      <div className="items">
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
