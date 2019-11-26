import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import BottomFixedBar from "./BottomFixedBar";
import Modal from "./Modal";
import success from "../images/success.png";
import spinner from "../images/spinner.gif";

function ShoppingCart() {
  var [total, setTotal] = useState(0);
  var [totalAmount, setTotalAmount] = useState(0);
  var [show, setShow] = useState(false);
  var [products, setProducts] = useState([]);

  useEffect(() => {
    var URL = "http://localhost:3001/products";
    fetch(URL)
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);
  var renderItems = () =>
    products.map(item => {
      return (
        <CartItem
          key={item.id}
          item={item}
          add={addToTotal}
          remove={removeFromTotal}
        />
      );
    });
  var addToTotal = addAmount => {
    setTotal(++total);
    setTotalAmount((totalAmount = totalAmount + addAmount));
  };
  var removeFromTotal = removeAmount => {
    setTotal(--total);
    setTotalAmount((totalAmount = totalAmount - removeAmount));
  };
  var openModal = () => {
    setShow(true);
  };
  return (
    <div className="shopping-cart">
      {products.length ? (
        <>
          <div className="items">
            <div className="container">{renderItems()}</div>
          </div>
          <BottomFixedBar
            totalItems={total}
            totalQuantity={totalAmount}
            openModal={openModal}
          />
          <Modal show={show}>
            <img src={success} className="modal-image" alt="success" />
            <div className="modal-total">Total Price: {totalAmount}</div>
            <div>Transaction Successful</div>
          </Modal>
        </>
      ) : (
        <img src={spinner} alt="loader" className="spinner" />
      )}
    </div>
  );
}

export default ShoppingCart;
