import style from "./StepThree.module.css";
import Form from "./Form/Form";
import Input from "./Input/Input"
import { useContext } from "react";
import { CreditInfoContext } from "../../context/CreditInfoContext"


export default function StepThree({ step }) {
  
  const {creditInfo, setCreditInfo} = useContext(CreditInfoContext);

  function handleInputChange(e) {
    setCreditInfo({
      ...creditInfo,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className={`${step === 3 ? '' : style.hidden}`}>
      <Form phase="credit-card" title="付款資訊" >
        <div className={style.content}>
          <div className={style.name}>
            <Input
              title="持卡人姓名"
              placeholder='請輸入姓名'
              maxLength={10}
              name="creditName"
              onChange={handleInputChange}
            />
          </div>
          <div className={style.number}>
            <Input
              title="卡號"
              placeholder='1111 2222 3333 4444'
              maxLength={16}
              name="creditNumber"
              onChange={handleInputChange}
            />
          </div>
          <div className={style.exp}>
            <Input
              title="有效期限"
              placeholder='有效期限'
              maxLength={5}
              name="creditExp"
              onChange={handleInputChange}
            />
          </div>
          <div className={style.cvc}>
            <Input
              title="CVC/CCV"
              placeholder='cvc/ccv'
              maxLength={3}
              name="creditCvc"
              onChange={handleInputChange}
            />
          </div>
        </div>
      </Form>
    </div>
  );
}
