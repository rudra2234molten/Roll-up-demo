import React from 'react'
import Apex from './Hero.module.css'

function Hero() {
  return <>
    <section className={Apex.hero_main_container}>
      <div className={Apex.left_hero}>
        <span className={Apex.gradient_text}>rollup.js</span>
        <h1>The JavaScript <br /> module bundler</h1>
        <p>Compile small pieces of code into something larger <br /> and more complex</p>
        <div className={Apex.hero_btn_container}>
          <button>Get started</button>
          <button>View on Github</button>
        </div>
      </div>
      <div className={Apex.right_hero}>
        <div className={Apex.right_cover}></div>
        <img src="https://rollupjs.org/rollup-logo.svg" alt="" />
      </div>
    </section>
  </>
}

export default Hero