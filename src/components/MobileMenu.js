import React from 'react'
import './mobile-menu.scss'

export default function MobileMenu({ openMobileMenu }) {
  return (
    <section className='mobile-menu'>
      <div className={openMobileMenu ? 'mobile-menu__opened' : 'mobile-menu__closed'}>
        <div className={openMobileMenu ? 'mobile-menu__opened__contents' : 'mobile-menu__closed__contents'}>

        <ul>
          <li><a href='/'>Collections</a></li>
          <li><a href='/'>Men</a></li>
          <li><a href='/'>Women</a></li>
          <li><a href='/'>About</a></li>
          <li><a href='/'>Contact</a></li>
        </ul>


        </div>
      </div>
    </section>
  )
}
