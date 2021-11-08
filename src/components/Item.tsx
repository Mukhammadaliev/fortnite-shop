import React, { FC } from 'react'
import { ICartItem, IItem } from '../types'

interface ItemProps {
  item: IItem;
  addToCart: (item: ICartItem) => void
}

const Item: FC<ItemProps> = ({item, addToCart}) => {
  const {description, id, price, full_background, name} = item

  const addCart = () => {
    addToCart({
      id,
      name,
      price,
      quantity: 0,
    })
  }

  return (
    <div className='item' id={id}>
      <img src={full_background} alt="" />
      <div>
        <p>{name}</p>
        <p>{description}</p>
        <p>{price}</p>
        <button onClick={addCart}>Купить</button>
      </div>
    </div>
  )
}

export default Item
