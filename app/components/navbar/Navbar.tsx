import React, { FC } from 'react';
import Image from 'next/image'
import navbar from 'styles/navbar.module.scss';
import Search from '../search/Search';

const Navbar:FC = () => {

  return (
    <div className={navbar.navbar}>
      <div className={navbar.navbar__logo_search}>
        {/* <img className='navbar__logo' alt='logo' src={ LOGO }/> */}
          <Image
            className={navbar.navbar__logo}
            src="/logo_ml.png"
            alt="Logo"
            width={50}
            height={40}
          />
        <Search />
      </div>
    </div>
  )
}

export default Navbar
