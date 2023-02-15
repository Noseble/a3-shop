import style from "./Cart.module.css";
import { ReactComponent as Minus } from "../icons/minus.svg";
import { ReactComponent as Plus } from "../icons/plus.svg";

const data = [
  {
    id: "1",
    name: "貓咪罐罐",
    img: "https://picsum.photos/300/300?text=1",
    price: 100,
    quantity: 2,
  },
  {
    id: "2",
    name: "貓咪干干",
    img: "https://picsum.photos/300/300?text=2",
    price: 200,
    quantity: 1,
  },
];

function Products() {
  return data.map((data) => {
    console.log(data.price * data.quantity);
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
              <Minus alt="minus" />
              <span className={style.count}>{data.quantity}</span>
              <Plus alt="plus" />
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
    </section>
  );
}
