import { ReactComponent as LeftArrow } from "../assets/icons/left-arrow.svg";
import { ReactComponent as RightArrow } from "../assets/icons/right-arrow.svg";
import style from "./ProgressControl.module.css";

export default function ProgressControl() {
  return (
    <section className={style.progress_control}>
      <section className={style.btn_group} data-phase="address">
        <button className={style.next}>
          下一步
          <RightArrow className="cursor"/>
        </button>
      </section>
      <section className={style.btn_group2} data-phase="shipping">
        <button className={style.prev}>
          <LeftArrow className="cursor"/>
          上一步
        </button>
        <button className={style.next}>
          下一步
          <RightArrow className="cursor"/>
        </button>
      </section>
      <section className={style.btn_group} data-phase="credit-card">
        <button className={style.prev}>
          <LeftArrow className="cursor"/>
          上一步
        </button>
        <button className={style.next}>確認下單</button>
      </section>
    </section>
  );
}