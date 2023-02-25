import style from "./RegisterContainer.module.css";
import Progress from "./Progress/Progress";
import ProgressControl from "./Progress/ProgressControl";
import StepOne from "./Step/StepOne";
import StepTwo from "./Step/StepTwo";
import StepThree from "./Step/StepThree";
import { useState } from "react";

export default function RegisterContainer() {
  let [state, setState] = useState(1)

  function control(e) {
    const step = e.target.dataset.step
    if (step === '1') { setState(state + 1) }
    if (step === '2') { setState(state - 1) }
  }

  return (
    <div className={style.Container}>
      <Progress />
      <StepOne />
      {/* <StepTwo /> */}
      {/* <StepThree /> */}
      <ProgressControl step={state} ctrl={control} />
    </div>
  );
}
