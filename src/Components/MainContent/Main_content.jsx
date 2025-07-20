import React from 'react'
import Main_content_child from './Main_content_child'
import theweb from '/src/assets/IMG-20250208-WA0003.jpg'
import tree_shaking from '/src/assets/IMG-20250208-WA0004.jpg'
import codeSplit from '/src/assets/IMG-20250208-WA0006.jpg'
import plugins from '/src/assets/IMG-20250208-WA0002.jpg'
import specia_need from '/src/assets/IMG-20250208-WA0001.jpg'
import bundler from '/src/assets/IMG-20250208-WA0005.jpg'

const Main_content = () => {
  let content = [
    {
      img: theweb,
      para: "The Web, Node …",
      paragr: "Rollup supports many output formats: ES modules, CommonJS, UMD, SystemJS and more. Bundle not only for the web but for many other platforms as well.",
      see: "See all formats",
    },
    {
      img: tree_shaking,
      para: "Tree-shaking",
      paragr: "Rollup supports many output formats: ES modules, CommonJS, UMD, SystemJS and more. Bundle not only for the web but for many other platforms as well.",
      see: "See all formats",
    },
    {
      img: codeSplit,
      para: "Code-splitting without overhead",
      paragr: "Rollup supports many output formats: ES modules, CommonJS, UMD, SystemJS and more. Bundle not only for the web but for many other platforms as well.",
      see: "See all formats",
    },
    {
      img:plugins,
      para: "Powerful plugins",
      paragr: "Rollup supports many output formats: ES modules, CommonJS, UMD, SystemJS and more. Bundle not only for the web but for many other platforms as well.",
      see: "See all formats",
    },
    {
      img: specia_need,
      para: "Handles your special needs",
      paragr: "Rollup supports many output formats: ES modules, CommonJS, UMD, SystemJS and more. Bundle not only for the web but for many other platforms as well.",
      see: "See all formats",
    },
    {
      img: bundler,
      para: "The bundler behind Vite",
      paragr: "Rollup supports many output formats: ES modules, CommonJS, UMD, SystemJS and more. Bundle not only for the web but for many other platforms as well.",
      see: "See all formats",
    },
  ]


  return (
    <>
      <div className='cart'>
        <Main_content_child content={content} />
      </div>
    </>
  )
}

export default Main_content
