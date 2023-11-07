import React, { useState, useEffect } from 'react';
import s from './contacts.module.scss';

const ContactItem = (props) => {
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    const price = parseFloat(props.phone);
    const newTotalPrice = price * quantity;
    setTotalPrice(newTotalPrice);
  }, [quantity, props.phone]);

  return (
    <li className={s.list_item}>
      <p className={s.list_item_text}>{props.name}</p>
      <p className={s.list_item_text}>{props.phone}</p>
      <div className={s.quantity_controls}>
        <button onClick={handleIncrement}>+</button>
        <span>{quantity}</span>
        <button onClick={handleDecrement}>-</button>
      </div>
      <p>Total Price: {totalPrice}</p>
      <button className={s.list_item_button} onClick={props.handleDeleteItem}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
