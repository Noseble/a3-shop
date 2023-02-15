import style from "./RegistrerContainer.module.css";
import Progress from "./Progress/Progress";
import ProgressControl from "./Progress/ProgressControl";
import StepOne from "./Step/StepOne";
// import StepTwo from "./Step/StepTwo";
// import StepThree from "./Step/StepThree";

export default function RegistrerContainer() {
  return (
    <div className={style.Container}>
      <Progress />
      <StepOne />
      {/* <StepTwo /> */}
      {/* <StepThree /> */}
      <ProgressControl />
    </div>
  );
}
