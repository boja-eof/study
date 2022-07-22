import PropTypes from "prop-types";
import React from "react";

const Human = (prop) => {
  return (
    <div>
      <h1>Human - {prop.type}</h1>
    </div>
  );
};

export const TYPE_MEN = "men";
export const TYPE_WOMEN = "women";

Human.propTypes = {
  type: PropTypes.oneOf([TYPE_MEN, TYPE_WOMEN]).isRequired,
};

export default Human;
