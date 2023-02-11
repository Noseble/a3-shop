import './Main.css';
import ProgressControl from './Progress/ProgressControl';
import Progress from './Progress/Progress';
import StepOne from './Step/StepOne';

function Main() {
  return (
    <main>
      <Progress />
      <StepOne />
      <ProgressControl />
    </main>
  );
}

export default Main