import Register from "./Register/Register"
import CartInformation from "./Cart/CartInfo"
import ProgressControl from "./ProgressControl/ProgressControl"


export default function Main() {
    return (
        <>
            <main class="site-main">
                <div class="main-container">
                    <Register />
                    <CartInformation />
                    <ProgressControl />
                </div>
            </main>
        </>
    )
}