import React, { useState } from 'react'
import './header.scss'
import hamburgerIcon from '../images/icon-menu.svg'
import { ReactComponent as CartIcon } from '../images/icon-cart.svg'
import avatarIcon from '../images/image-avatar.png'
import logo from '../images/logo.svg'
import MobileMenu from './MobileMenu'
import closeIcon from '../images/icon-close.svg'
import deleteIcon from '../images/icon-delete.svg'
import productImage from '../images/image-product-1-thumbnail.jpg'


export default function Header({ quantity, setQuantity, addedToCart, setAddedToCart }) {

  const [openMobileMenu, setOpenMobileMenu] = useState(false)
  const [displayCart, setDisplayCart] = useState(false)

  return (
    <div className='header'>
      
      <div>
        <img
          src={openMobileMenu ? closeIcon : hamburgerIcon}
          alt={openMobileMenu ? 'close icon' : 'menu icon'}
          className='menu-icon'
          onClick={() => setOpenMobileMenu(!openMobileMenu)} />

        <MobileMenu openMobileMenu={openMobileMenu} />

        <img src={logo} alt='logo' />

        <ul>
          <li><a href='/'>Collections</a></li>
          <li><a href='/'>Men</a></li>
          <li><a href='/'>Women</a></li>
          <li><a href='/'>About</a></li>
          <li><a href='/'>Contact</a></li>
        </ul>
      </div>

      <div>
        <div>

          <span
            className={addedToCart ? 'notificationBadge' : null}
            num={quantity}
            onClick={() => setDisplayCart(!displayCart)}
          >
            <CartIcon fill={addedToCart ? 'black' : '#69707D'} />
          </span>

          {/* ----------inside cart---------- */}
          {displayCart &&
            <div
              className='cart'
            >
              <h1>Cart</h1>
              {
                addedToCart
                  ?
                  <div className='cart__filled'>
                    <div>
                      <img src={productImage} alt='product' />
                      <div>
                        <p>Autumn Limited Edition Sneakers</p>
                        <p>$125.00 x {quantity} &nbsp;
                          <span>${(quantity * 125.00).toFixed(2)}</span>
                        </p>
                      </div>
                      <img
                        onClick={() => {
                          setQuantity(0)
                          setAddedToCart(false)
                        }}
                        src={deleteIcon}
                        alt='delete icon'
                      />
                    </div>
                    <button>Checkout</button>
                  </div>
                  :
                  <div className='cart__empty'>
                    <p>Your cart is empty.</p>
                  </div>
              }
            </div>
          }
          {/* -------------------------------------- */}

        </div>
        <img src={avatarIcon} alt='avatar' className='avatar' />
      </div>

    </div>
  )
}
