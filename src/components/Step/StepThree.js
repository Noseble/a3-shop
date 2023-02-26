import style from "./StepThree.module.css";
import Form from "./Form/Form";
import Input from "./Input/Input"

export default function StepThree({ step }) {
  return (
    <div className={`${step === 3 ? '' : style.hidden}`}>
      <Form phase="credit-card" title="付款資訊" >
        <div className={style.content}>
          <div className={style.name}>
            <Input
              name="持卡人姓名"
              placeholder="請輸入姓名"
              maxLength={10}
            />
          </div>
          <div className={style.number}>
            <Input
              name="卡號"
              placeholder="1111 2222 3333 4444"
              maxLength={16}
            />
          </div>
          <div className={style.exp}>
            <Input
              name="有效期限"
              placeholder="MM/YY"
              maxLength={5}
            />
          </div>
          <div className={style.cvc}>
            <Input
              name="CVC/CCV"
              placeholder="123"
              maxLength={3}
            />
          </div>
        </div>
      </Form>
    </div>
  );
}
