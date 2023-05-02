function Steps ({DataPhase, Text, Label, Bar, Order}) {
  return (
  <>
  <span className="progress-group" data-phase={DataPhase}>
    <span className="progress-icon">
      <span className="text">{Text}</span>
      <svg className="icon cursor-point">
        <use svg="#svg-icon-pg-complete"></use>
      </svg>
      </span>
      <span className="progress-label">{Label}</span>
  </span>
  <span className={Bar} data-order={Order}></span>
  </>
              )
}

export default function RegisterProgress() {
    return (
        <>
            <section className="progress-container col col-12">
              <Steps
              DataPhase="address"
              Text="1"
              Label="寄送地址"
              Order="1"
              Bar="progress-bar"/>
              <Steps
              DataPhase="shipping"
              Text="2"
              Label="運送方式"
              Order="2"
              Bar="progress-bar"/>
              <Steps
              DataPhase="credit-card"
              Text="3"
              Label="付款資訊"/>
            </section>
        </>
    )
}