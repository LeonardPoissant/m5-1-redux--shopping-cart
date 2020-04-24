import React from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";

import { updateQuantity, removeItem } from "../actions";

const CartItem = ({ item }) => {
  const itemQuantity = useSelector((state) => state[item.id].quantity);

  console.log(itemQuantity);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div>{item.title}</div>
      <button onClick={() => dispatch(removeItem(item.id))}>X</button>

      <div>
        Quantity:
        <input
          value={itemQuantity}
          onChange={(ev) => dispatch(updateQuantity(item.id, ev.target.value))}
        ></input>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: white;
`;

export default CartItem;
