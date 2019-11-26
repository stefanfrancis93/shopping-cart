import React from 'react';

function AddRemoveQuantity({ quantity, addOne, removeOne }) {

    return (
        <div>
            <button onClick={removeOne}>-</button>
            <span className="quantity">{quantity}</span>
            <button onClick={addOne}>+</button>
        </div>
    )
}
export default AddRemoveQuantity