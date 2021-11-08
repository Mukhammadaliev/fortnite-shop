import React, { FC } from 'react'
import { ICartItem } from '../types'
import CartItem from './CartItem'

interface CartListProps {
  order: ICartItem[];
  totalPrice: number;
  removeCatItem: (id : string) => void
}

const CartList :FC<CartListProps> = ({order, totalPrice, removeCatItem}) => {
  return (
    <div className='cart-list'>
      {
        order.map(item => (
          <CartItem removeCatItem={removeCatItem} key={item.id} orderItem={item}/>
        ))
      }
      <p>{totalPrice}</p>
    </div>
  )
}

export default CartList
