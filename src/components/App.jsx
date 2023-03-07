import style from "./App.module.css";
import Progress from "./Progress/Progress";
import ProgressControl from "./Progress/ProgressControl";
import StepOne from "./Step/StepOne";
import StepTwo from "./Step/StepTwo";
import StepThree from "./Step/StepThree";
import { CreditInfoContext } from "../context/CreditInfoContext"
import { useContext, useState } from "react";

export default function RegisterContainer() {
  const [state, setState] = useState(1)
  const creditInfo = useContext(CreditInfoContext)
  const [cardInfo, setCardInfo] = useState(creditInfo)

  function onChange (e) {
    setCardInfo({
      ...cardInfo,
      [e.target.name]: e.target.value
    })
  }

  function handleClick(e) {
    const step = e.target.dataset.step
    if (step === '1') { setState(state + 1) }
    if (step === '2') { setState(state - 1) }
  }

  return (
    <CreditInfoContext.Provider value={cardInfo}>
        <div className={style.Container}>
          <Progress step={state} />
          <StepOne step={state} />
          <StepTwo step={state} />
          <StepThree step={state} onChange={onChange} />
          <ProgressControl step={state} onClick={handleClick} />
        </div>
    </CreditInfoContext.Provider>
  );
}
