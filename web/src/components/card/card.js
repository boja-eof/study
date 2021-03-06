import { ApiHost } from "../../settings";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import React from "react";
import style from "./base.module.scss";

const Card = (props) => {
  const { name, slug, image, description } = props;

  return (
    <div className={style.base}>
      <Link to={`/product/${slug}`}>
        <div>
          <img src={`${ApiHost}/${image}`} alt={name} />
          <div>
            <h4>{name}</h4>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
