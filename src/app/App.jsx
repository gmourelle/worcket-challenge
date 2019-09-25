import React, { useState, useEffect } from "react";
import api from "../api";
import { Header, ItemList, ModalForm, EmptyList } from "../components";

import "./App.scss";
const App = () => {
  const [status, setStatus] = useState("booting");
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    api.items.fetch().then(initialItems => {
      setItems(initialItems);
      setStatus("init");
    });
  }, []);
  const updateList = async value => {
    try {
      setStatus("pending");

      await api.items.update(value);

      setItems(value);
      setStatus("resolved");
      setIsOpen(false);
    } catch (e) {
      console.log("e.message:", e.message);
      setStatus("rejected");
    }
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const addItem = item => {
    updateList([...items, { id: String(Math.random()), name: item }]);
  };

  const deleteItem = id => () => {
    updateList(items.filter(item => item.id !== id));
  };

  return (
    <div className="app-body">
      {status === "booting" ? (
        <span>Loading...</span>
      ) : (
        <React.Fragment>
          <Header itemsAmount={items.length} />
          {items.length === 0 && <EmptyList />}
          <ItemList
            items={items}
            deleteItem={deleteItem}
            openModal={openModal}
            status={status}
          />
          <ModalForm
            addItem={addItem}
            isOpen={isOpen}
            closeModal={closeModal}
            status={status}
          />
          <button
            type="button"
            className="app-body__add-item"
            disabled={status === "pending"}
            onClick={openModal}
          >
            Add item
          </button>
        </React.Fragment>
      )}
    </div>
  );
};

export default App;
