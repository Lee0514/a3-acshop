import React from 'react'
import { ReactComponent as Red } from "../../icons/Minus-button.svg"
import { ReactComponent as Plus } from "../../icons/Plus-button.svg"

const Products = ({ id, name, img, price, quantity }) => {
  return (
    <>
        <div key={id} className="product-container col col-12" data-count={quantity} data-price={price}>
          <img src={img} alt={name} className="img-container" />
          <div className="product-info">
            <div className="product-name">{name}</div>
            <div className="product-control-container">
              <div className="product-control">
                <Red className="product-action minus" />
                <span className="product-count">{quantity}</span>
                <Plus className="product-action plus" />
              </div>
            </div>
            <div className="price">{price}</div>
          </div>
        </div>
    </>
  )
}

export default Products