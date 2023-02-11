import { ReactComponent as LeftArrow } from "../icons/left-arrow.svg";
import { ReactComponent as RightArrow } from "../icons/right-arrow.svg";
import style from "./ProgressControl.module.css";

export default function ProgressControl() {
  return (
    <section className={style.progress_control}>
      <section className={style.btn_group} data-phase="address">
        <button className={style.next}>
          下一步
          <RightArrow className={style.cursor} />
        </button>
      </section>
      <section className={style.btn_group2} data-phase="shipping">
        <button className={style.prev}>
          <LeftArrow className={style.cursor} />
          上一步
        </button>
        <button className={style.next}>
          下一步
          <RightArrow className={style.cursor} />
        </button>
      </section>
      <section className={style.btn_group} data-phase="credit-card">
        <button className={style.prev}>
          <LeftArrow className={style.cursor} />
          上一步
        </button>
        <button className="next">確認下單</button>
      </section>
    </section>
  );
}