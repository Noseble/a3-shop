import { ReactComponent as LeftArrow } from "../assets/icons/left-arrow.svg";
import { ReactComponent as RightArrow } from "../assets/icons/right-arrow.svg";
import style from "./ProgressControl.module.css";

export default function ProgressControl({ ctrl, step }) {

  return (
    <section className={style.progress_control}>
      <section className={`${style.btn_group} ${step === 1 ? '' : style.hidden}`} data-phase="address">
        <button className={`${style.next} cursor`} onClick={ctrl} data-step='1'>
          下一步
          <RightArrow />
        </button>
      </section>
      <section className={`${style.btn_group2} ${step === 2 ? '' : style.hidden}`} data-phase="shipping">
        <button className={`${style.prev} cursor`} onClick={ctrl} data-step='2'>
          <LeftArrow />
          上一步
        </button>
        <button className={`${style.next} cursor`} onClick={ctrl} data-step='1'>
          下一步
          <RightArrow />
        </button>
      </section>
      <section className={`${style.btn_group} ${step === 3 ? '' : style.hidden}`} data-phase="credit-card">
        <button className={`${style.prev} cursor`} onClick={ctrl} data-step='2'>
          <LeftArrow />
          上一步
        </button>
        <button className={`${style.next} cursor`} onClick={ctrl} data-step='3'>確認下單</button>
      </section>
    </section>
  );
}