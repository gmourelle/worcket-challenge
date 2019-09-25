import React from "react";
import PropTypes from "prop-types";

import "./Header.scss";
const Header = ({ itemsAmount }) => (
  <div className="header">
    <h1>Supermarket List</h1>
    <h3 className="header__items">{itemsAmount} ITEMS</h3>
  </div>
);

Header.propTypes = {
  itemsAmount: PropTypes.number.isRequired
};
export default Header;
