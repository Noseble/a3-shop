import style from "./StepTwo.module.css";
import Form from "./Form/Form";

export default function StepTwo({ step }) {
  return (
    <div className={`${step === 2 ? '' : style.hidden }`}>
      <Form phase="shipping" title="結帳" >
        <label className={`${style.radio_group} cursor`} data-price="0">
          <input id="shipping-standard" type="radio" name="shipping" checked></input>
          <div className={style.radio_info}>
            <div className={style.info}>
              <div className={style.text}>標準運送</div>
              <div className={style.price}>免費</div>
            </div>
            <div className={style.period}>約 3~7個工作天</div>
          </div>
          <div className={style.radio_border_box}></div>
        </label>
        <label className={`${style.radio_group} cursor`} data-price="500">
          <input id="shipping-dhl" type="radio" name="shipping"></input>
          <div className={style.radio_info}>
            <div className={style.info}>
              <div className={style.text}>DHL 貨運</div>
              <div className={style.price}>$500</div>
            </div>
            <div className={style.period}>48 小時內送達</div>
          </div>
          <div className={style.radio_border_box}></div>
        </label>
      </Form>
    </div>
  );
}