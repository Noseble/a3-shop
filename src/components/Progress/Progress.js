import style from './Progress.module.css';
import { ReactComponent as Complete } from '../assets/icons/pg-complete.svg';

export default function Progress({ step }) {
  return (
    <section className={style.register}>
      <h2 className={style.title}>結帳</h2>
      <section className={style.container}>
        <span className={style.group} data-phase="address">
          <span className={`${style.icon} ${style.show}`}>
            <span className={`${style.text} ${step > 1 ? style.hidden : ''}`}>1</span>
            <Complete className={`${step > 1 ? '' : style.hidden}`} alt="complete" />
          </span>
          <span className={style.label}>寄送地址</span>
        </span>
        <span className={style.bar} data-order="1"></span>
        <span className={`${style.group} ${step >= 2 ? '' : style.opacity}`} data-phase="shipping">
          <span className={style.icon}>
            <span className={`${style.text} ${step > 2 ? style.hidden : ''}`}>2</span>
            <Complete className={`${step > 2 ? '' : style.hidden}`} alt="complete" />
          </span>
          <span className={style.label}>運送方式</span>
        </span>
        <span className={`${style.bar} ${step >= 2 ? '' : style.opacity}`} data-order="2"></span>
        <span className={`${style.group} ${step >= 3 ? '' : style.opacity}`} data-phase="credit-card">
          <span className={style.icon}>
            <span className={style.text}>3</span>
            <Complete className={style.hidden} alt="complete" />
          </span>
          <span className={style.label}>付款資訊</span>
        </span>
      </section>
    </section>
  )
}



