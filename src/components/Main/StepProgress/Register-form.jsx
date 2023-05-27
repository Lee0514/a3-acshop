import StepProgress from "./RegisterProgress"
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

function Register({ dataPhase, onChange, totalPrice }) {
  return (
  <section className="register-container col col-lg-6 col-sm-12" data-phase={dataPhase} data-total-price={totalPrice}>
      <StepProgress />
    <section className="form-container col col-12">
      <Step1 />
      <Step2 />
      <Step3 onChange={onChange}/>
    </section>
  </section>
  )
}

export default Register;