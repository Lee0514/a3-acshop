import Register from "./StepProgress/Register-form"
import ProgressControl from "./ProgressControl/ProgressControl"
import Cart from "./Cart/Cart"
import { useState, useContext } from "react";
import { CartContext } from "./Cart/CartContext";
import { FormContext } from "./StepProgress/FormContext";


export default function Main() {
    const [phase, setPhase] = useState(1)
    const cartData = useContext(CartContext)
    const [productData, setProductData] = useState(cartData)
    const formData = useContext(FormContext)
    const [form, setForm] = useState(formData)
    const totalPrice = productData.map(data => data.price * data.quantity).reduce((acc, cur) => acc + cur)

    function handleChange({ name, value }) {
        setForm((prevData) => {
        return prevData.map(data => {
            if (data.name === name) {
            return {
                ...data,
                value: value,
            }
            }
            return data;
        })
        })
    }

    function handleSubmit() {
        form.map(data => {
        return console.log(`${data.label}: ${data.value}`)
        })
        return console.log(`總金額：${totalPrice}`)
    }

    function handleMinusClick(id) {
        setProductData((prevData) => {
        return prevData.map(data => {
            if (data.id === id) {
            return {
                ...data,
                quantity: data.quantity === 0 ? 0 : data.quantity - 1
            }
            }
            return data;
        })
        })
    }

    function handlePlusClick(id) {
        setProductData((prevData) => {
        return prevData.map(data => {
            if (data.id === id) {
            return {
                ...data,
                quantity: data.quantity + 1
            }
            }
            return data;
        })
        })
    }

    function handleClick(e) {
    if (e.target.classList.contains('next') && phase !== 3) {
      setPhase(n => n + 1)
    } else if (e.target.classList.contains('prev')) {
      setPhase(n => n - 1)
    } else if (phase === 3) {
      setPhase(1)
      handleSubmit()
      setForm(formData)
    }
  }

    return (
    <main className="site-main">
     <div className="main-container">
      <FormContext.Provider value={form}>
        <CartContext.Provider value={productData}>
          <Register dataPhase={phase} onChange={handleChange} totalPrice={totalPrice}/>
          <Cart onMinClick={handleMinusClick} onPlusClick={handlePlusClick} totalPrice={totalPrice}/>
          <ProgressControl onClick={handleClick} onSubmit={handleSubmit}/>
        </CartContext.Provider>
      </FormContext.Provider>
     </div>
    </main>
  )
}