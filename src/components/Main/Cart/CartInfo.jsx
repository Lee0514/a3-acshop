import { CartItems } from "./CartItems";
import Products from "./Products";
import { useState } from "react";

export default function Cart() {
  const [total, setTotal] = useState(0);
  function totalPLus(price) {
    setTotal(total + price);
  }
  function totalMin(price) {
    setTotal(total - price);
  }

  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>

      <section className="product-list col col-12" data-total-price="0">
        {CartItems.map((item) => (
          <Products
            key={item.id}
            {...item}
            totalPLus={totalPLus}
            totalMin={totalMin}
          />
        ))}
      </section>

      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
        <div className="price">免費</div>
      </section>
      <section className="cart-info total col col-12">
        <div className="text">小計</div>
        <div className="price">${total}</div>
      </section>
    </section>
  );
}