import React from 'react'
import './contents.scss'
import plusIcon from '../images/icon-plus.svg'
import minusIcon from '../images/icon-minus.svg'
import { ReactComponent as CartIcon } from '../images/icon-cart-white.svg'

export default function CounterAndButton({ quantity, setQuantity, addedToCart, setAddedToCart }) {

  const handleMinus = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className='contents'>
      <div className='title-and-description'>
        <h2>SNEAKER COMPANY</h2>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
        <div>
          <span>
            <h3>$125.00</h3>
            <h4>50%</h4>
          </span>
          <h5>$250.00</h5>
        </div>
      </div>


      <div className='counter-and-button'>
        <div className='counter'>
          <button
            onClick={handleMinus}
          ><img src={minusIcon} alt='minus button' /></button>

          <p>{quantity}</p>

          <button
            onClick={() => setQuantity(quantity + 1)}
          ><img src={plusIcon} alt='plus button' /></button>
        </div>

        <button
          disabled={quantity === 0}
          className='add-to-cart-button'
          onClick={() => setAddedToCart(true)}
        >
          <CartIcon fill='white' />
          Add to cart
        </button>
      </div>
    </div>
  )
}
