import style from'./Progress.module.css';
import { ReactComponent as Complete } from '../icons/pg-complete.svg';

function Progres({ phase, step, stepName }) {
  return (
    <>
    <span className={style.group} data-phase={phase}>
        <span className={style.icon}>
          <span className={style.text}>{step}</span>
              <Complete className={style.svg} alt="complete" />
          </span>
        <span className={style.label}>{stepName}</span>
        </span>
        <span className={style.bar} data-order={step}></span>
    </>
  )
}

function Progress() {
  return (
    <section className={style.register}>
    <h2 className={style.title}>結帳</h2>     
     <section className={style.container}>
      <Progres 
      phase= 'address'
      step= {1}
      stepName= '寄送地址' 
      />
      <Progres 
      phase= 'shipping'
      step= {2}
      stepName= '運送方式' 
      />
      <Progres 
      phase= 'shipping'
      step= {3}
      stepName= '付款資訊' 
      />                 
      </section>
    </section>
  );
}

export default Progress;