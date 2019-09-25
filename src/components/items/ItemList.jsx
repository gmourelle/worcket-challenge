import React from "react";
import PropTypes from "prop-types";
import trashIcon from "../../assets/trash-icon.png";
import "./ItemList.scss";

const ItemList = ({ items, deleteItem }) => (
  <React.Fragment>
    {items.map(item => (
      <div key={item.id} className="container-item">
        {item.name}
        <button
          type="button"
          className="container-item__del-btn"
          onClick={deleteItem(item.id)}
        >
          <img
            src={trashIcon}
            alt="trash icon"
            className="container-item__icon-trash"
          ></img>
        </button>
      </div>
    ))}
  </React.Fragment>
);

ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string
    })
  ).isRequired,
  deleteItem: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  fetching: PropTypes.string.isRequired
};

export default ItemList;
