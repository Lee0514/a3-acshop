function StepInfoLg4 ({Label, Placeholder}) {
  return (
    <>
    <div className="col col-12">
      <div className="input-group input-w-lg-4 input-w-sm-full">
        <div className="input-label">{Label}</div>
        <input type="text" placeholder={Placeholder} />
      </div>
    </div>
    </>
  )
}

function StepInfoLg3 ({Label, Placeholder}) {
  return (
    <>
      <div className="input-group input-w-lg-3 input-w-sm-s3">
        <div className="input-label">{Label}</div>
        <input type="text" placeholder={Placeholder} />
      </div>
    </>
  )
}

export default function Step3() {
    return (
        <>
            <form className="col col-12" data-phase="credit-card">
                <h3 className="form-title">付款資訊</h3>
                <section className="form-body col col-12">
                  <StepInfoLg4
                  Label="持卡人姓名"
                  Placeholder="John Doe"/>
                  <StepInfoLg4
                  Label="卡號"
                  Placeholder="1111 2222 3333 4444"/>
                <div className="col col-12">
                    <StepInfoLg3
                  Label="有效期限"
                  Placeholder="MM/YY"/>
                  <StepInfoLg3
                  Label="CVC / CCV"
                  Placeholder="123"/>
                </div>
                </section>
            </form>
        </>
    )
}