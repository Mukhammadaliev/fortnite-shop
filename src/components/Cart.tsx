import React, { FC } from 'react'

interface CartProps {
  totalCount: number;
  totalPrice: number;
  handleCartShow: () => void;
}

const Cart :FC<CartProps> = ({totalPrice, totalCount, handleCartShow,}) => {
  return (
    <div onClick={handleCartShow} className='cart'>
      <span>{totalPrice} V </span>|
      <span> {totalCount}</span>
    </div>
  )
}

export default Cart
