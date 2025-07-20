import React from 'react'
import Apex from './Nav.module.css'

function Nav() {
  return <>
    <header className={Apex.header_main_container}>
      <nav className={Apex.nav_container}>
        <figure className={Apex.logo}>
          <img src="https://rollupjs.org/rollup-logo.svg" alt="logo" />
          <h3>Rollup</h3>
        </figure>
        <div className={Apex.right_nav_container}>
          <ul className={Apex.left_nav}>
            <li className={Apex.input_nav}>
              <i className="ri-search-line"></i>
              <input type="text" name="search" id="search" placeholder='Search' />
              <span>Ctrl k</span>
            </li>
          </ul>
          <ul className={Apex.right_nav}>
            <li>guide</li>
            <li>repl</li>
            <li>chat<i className="ri-arrow-right-up-line"></i></li>
            <li>opencollective<i class="ri-arrow-right-up-line"></i></li>
            <li><i class="ri-translate-2"></i></li><i class="ri-arrow-drop-down-line"></i>  
            <li><i class="ri-sun-line"></i></li>
            <li><i class="ri-github-fill"></i></li>
            <li><i class="ri-mixtral-fill"></i></li>
          </ul>
        </div>
      </nav>
    </header>
  </>
}

export default Nav