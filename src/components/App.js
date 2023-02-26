import style from "./App.module.css";
import Progress from "./Progress/Progress";
import ProgressControl from "./Progress/ProgressControl";
import StepOne from "./Step/StepOne";
import StepTwo from "./Step/StepTwo";
import StepThree from "./Step/StepThree";
import { useState } from "react";

export default function RegisterContainer() {
  let [state, setState] = useState(1)

  function handleClick(e) {
    const step = e.target.dataset.step
    if (step === '1') { setState(state + 1) }
    if (step === '2') { setState(state - 1) }
  }

  return (
    <div className={style.Container}>
      <Progress step={state} />
      <StepOne step={state} />
      <StepTwo step={state} />
      <StepThree step={state} />
      <ProgressControl step={state} onClick={handleClick} />
    </div>
  );
}
