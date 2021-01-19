import React from 'react';
import Cart from '../components/Cart';
import Filter from '../components/Filter';
import Products from '../components/Products';

const CartScreen = () => {
  return (
    <div>
      <div className="content">
        <div className="main">
          <Filter />
          <Products />
        </div>
        <div className="sidebar">
          <Cart />
        </div>
      </div>
    </div>
  );
};
export default CartScreen;
