import style from "./Cart.module.css";
import { ReactComponent as Minus } from "../icons/minus.svg";
import { ReactComponent as Plus } from "../icons/plus.svg";

const data = [
  {
    id: "1",
    name: "貓咪罐罐",
    img: "https://ppt.cc/fDM4gx",
    price: 100,
    quantity: 2,
  },
  {
    id: "2",
    name: "貓咪干干",
    img: "https://ppt.cc/f9VSDx",
    price: 200,
    quantity: 1,
  },
];

function Products() {
  return data.map((data) => {
    return (
      <div
        className={style.product}
        key={data.id}
        data-count={data.quantity}
        data-price={data.price}
      >
        <img className={style.img} src={data.img} />
        <div className={style.info}>
          <div className={style.name}>{data.name}</div>
          <div className={style.control_content}>
            <div className={style.control}>
              <Minus className={style.minus} alt="minus" />
              <span className={style.count}>{data.quantity}</span>
              <Plus className={style.plus} alt="plus" />
            </div>
          </div>
          <div className={style.price}>{`${data.price * data.quantity}`}</div>
        </div>
      </div>
    );
  });
}

export default function Cart() {
  return (
    <section className={style.container}>
      <h3 className={style.title}>購物籃</h3>
      <section className={style.list}>
        <Products />
      </section>
      <section className={style.cart_info}>
        <div className={style.text}>運費</div>
        <div className={style.price}>免費</div>
      </section>
      <section className={style.cart_info}>
        <div className={style.text}>小計</div>
        <div className={style.price}>$0</div>
      </section>
    </section>
  );
}
