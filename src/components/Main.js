import './Main.css';
import Progress from './Progress/Progress';
import ProgressControl from './Progress/ProgressControl';
import StepOne from './Step/StepOne';
import StepTwo from './Step/StepTwo';
import StepThree from './Step/StepThree';

function Main() {
  return (
    <main>
      <Progress />
      <StepOne />
      <StepTwo />
      <StepThree />
      <ProgressControl />
    </main>
  );
}

export default Main