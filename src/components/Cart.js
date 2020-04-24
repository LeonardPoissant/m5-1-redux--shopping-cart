import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";

import { getStoreItemArray } from "../reducers/index";

import CartItem from "./CartItem";

const Cart = () => {
  const storeItems = useSelector(getStoreItemArray);
  const prices = useSelector((state) => state);
  const subtotal = useSelector((state) => {
    const itemsPrice = Object.values(state);
    return itemsPrice.reduce((acc, item) => {
      return item.price * item.quantity + acc;
    }, 0);
  });
  const formatPriceForHumans = (price) =>
    (price / 100).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

  return (
    <Wrapper>
      <YourCart>Your Cart</YourCart>
      <Items>
        {storeItems.length} {storeItems.length > 1 ? "Items" : "Item"}
      </Items>

      <ItemList>
        {storeItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ItemList>

      <Total>Total:{formatPriceForHumans(subtotal)}</Total>
      <Button>Purchase</Button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  background: #3c2241;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

const YourCart = styled.div`
  color: white;
  font-weight: bold;
`;

const Items = styled.p`
  color: white;
`;

const ItemList = styled.div``;

const Total = styled.div`
  color: white;
`;
const Button = styled.button``;

export default Cart;
