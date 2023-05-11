import React, {useState}from 'react'
import { ReactComponent as Min } from "../../assets/icons/Minus-button.svg"
import { ReactComponent as Plus } from "../../assets/icons/Plus-button.svg"


export default function Products({ id, name, img, price, totalMin, totalPLus}) {

  const[quantity, setQuantity] = useState(0)

  function handleOnMin() {
    if(quantity > 0) {
      setQuantity(quantity - 1)
      totalMin(price)
    }
  }

  function handleOnPlus() {
      setQuantity(quantity + 1)
      totalPLus(price)
  }

  return (
        <div key={id} className="product-container col col-12" data-count={quantity} data-price={price}>
          <img src={img} alt={name} className="img-container" />
          <div className="product-info">
            <div className="product-name">{name}</div>
            <div className="product-control-container">
              <div className="product-control">
                <Min className="product-action minus" onClick={handleOnMin}/>
                <span className="product-count">{quantity}</span>
                <Plus className="product-action plus" onClick={handleOnPlus}/>
              </div>
            </div>
            <div className="price" >{price * quantity}</div>
          </div>
        </div>
    ) 
}