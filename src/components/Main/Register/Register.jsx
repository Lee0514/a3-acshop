import RegisterProgress from "./StepProgress/RegisterProgress"
import RegisterForm from "./StepProgress/Register-form"



export default function Register() {
    return (
        <>
            <section class="register-container col col-lg-6 col-sm-12" data-phase="1" data-total-price="0">
            <h2 class="register-title col col-12">結帳</h2>
                <RegisterProgress />
                <RegisterForm />
            </section>
        </>
    )
}