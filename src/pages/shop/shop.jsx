import React from 'react'
import './styles/shop.css'
import {PRODUCTS} from '../../products'
import {Product} from './product'

const Shop = () => {
  return (
    <div className = "MainPage">
      <div className="Header">
        <h1>
          Buy your Sunnah products!
        </h1>
      </div>
      <div className="Products">
        <Product data = {PRODUCTS[0]}/>
        <Product data = {PRODUCTS[1]}/>
        <Product data = {PRODUCTS[2]}/>
        <Product data = {PRODUCTS[3]}/>
      </div>
    </div>
  )
}

export default Shop