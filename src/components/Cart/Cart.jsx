import style from "./Cart.module.css";
import { ReactComponent as Minus } from "../assets/icons/minus.svg";
import { ReactComponent as Plus } from "../assets/icons/plus.svg";
import { useState, useContext } from "react";
import { CartItemContext, totalPrice } from "../../context/CartContext";

function Product({ name, img, price, setTotal}) {
  let [quantity, setQuantity] = useState(0)


  function handlePlus() {
    setQuantity(quantity + 1)
    setTotal(total => total + price)

  }

  function handleMinus() {
    if (quantity === 0) return
    setQuantity(quantity - 1)
    setTotal(total => total - price)
  }


  return (
    <div
      className={style.product}
      data-count={quantity}
      data-price={price}
    >
      <img className={style.img} src={img} alt="cat" />
      <div className={style.info}>
        <div className={style.name}>{name}</div>
        <div className={style.control_content}>
          <div className={style.control}>
            <Minus className={style.minus} alt="minus" name="minus" onClick={handleMinus} />
            <span className={style.count}>{quantity}</span>
            <Plus className={style.plus} alt="plus" name="plus" onClick={handlePlus} />
          </div>
        </div>
        <div className={style.price}>${new Intl.NumberFormat('en').format(price * quantity)}</div>
      </div>
    </div>
  );

}

export default function Cart({ setTotal }) {
  const CartItem = useContext(CartItemContext)
  const finalPrice = new Intl.NumberFormat('en').format(useContext(totalPrice))

  return (
    <section className={style.container}>
      <h3 className={style.title}>購物籃</h3>
      <section className={style.list}>
        {CartItem.map(item =>
          <Product {...item}
            setTotal={setTotal}
            key={item.id}
          />
        )}
        <section className={style.cart_info}>
          <div className={style.text}>運費</div>
          <div className={style.price}>免費</div>
        </section>
        <section className={style.cart_info}>
          <div className={style.text}>小計</div>
          <div className={style.price}>$ {finalPrice}</div>
        </section>
      </section>
    </section>
  );
}
