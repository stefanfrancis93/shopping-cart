import React, { useState } from "react";
import CartItem from "./CartItem";
import data from "../data/data";
import BottomFixedBar from "./BottomFixedBar";
import Modal from "./Modal";
import success from "../images/success.png";

function ShoppingCart() {
  var [total, setTotal] = useState(0);
  var [totalAmount, setTotalAmount] = useState(0);
  var [show, setShow] = useState(false);
  var renderItems = () =>
    data.map(item => {
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
      <div className="items">{renderItems()}</div>
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
    </div>
  );
}

export default ShoppingCart;
