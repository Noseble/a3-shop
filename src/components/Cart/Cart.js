import style from "./Cart.module.css";
import { ReactComponent as Minus } from "../assets/icons/minus.svg";
import { ReactComponent as Plus } from "../assets/icons/plus.svg";

const productItems = [
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

function Product({ id, name, img, price, quantity }) {
  return (
      <div
        className={style.product}
        key={id}
        data-count={quantity}
        data-price={price}
      >
        <img className={style.img} src={img} alt="cat" />
        <div className={style.info}>
          <div className={style.name}>{name}</div>
          <div className={style.control_content}>
            <div className={style.control}>
              <Minus className={style.minus} alt="minus" />
              <span className={style.count}>{quantity}</span>
              <Plus className={style.plus} alt="plus" />
            </div>
          </div>
          <div className={style.price}>${`${price * quantity}`}</div>
        </div>
      </div>
    );

}

export default function Cart() {
  return (
    <section className={style.container}>
      <h3 className={style.title}>購物籃</h3>
      <section className={style.list}>
        {productItems.map(item => <Product {...item} />
        )}
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
