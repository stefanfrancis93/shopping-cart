import React from "react";

function AddRemoveQuantity({ quantity, addOne, removeOne }) {
  return (
    <div>
      <button onClick={addOne}>+</button>
      <span className="quantity">{quantity}</span>
      <button onClick={removeOne}>-</button>
    </div>
  );
}
export default AddRemoveQuantity;
