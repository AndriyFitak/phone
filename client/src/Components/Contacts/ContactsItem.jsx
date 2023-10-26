import React, { useState } from 'react';
import s from './contacts.module.scss';

const ContactItem = (props) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <li className={s.list_item}>
      <p className={s.list_item_text}>{props.name}</p>
      <p className={s.list_item_text}>{props.phone}</p>
      <div className={s.quantity_controls}>
        <button className={s.quantity_controls_plus} onClick={handleIncrement}>+</button>
        <span>{quantity}</span>
        <button className={s.quantity_controls_minus}  onClick={handleDecrement}>-</button>
      </div>
      <button className={s.list_item_button} onClick={props.handleDeleteItem}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
