import style from "./Cart.module.css";
import { ReactComponent as Minus } from "../assets/icons/minus.svg";
import { ReactComponent as Plus } from "../assets/icons/plus.svg";
import { useState, useContext } from "react";
import { CartItemContext, totalPrice } from "../../context/CartContext";

function Product({ name, img, price, setTotal }) {
  const Price = useContext(totalPrice)
  let [quantity, setQuantity] = useState(Price)
  



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
            <Minus className={style.minus} alt="minus" onClick={handleMinus} />
            <span className={style.count}>{quantity}</span>
            <Plus className={style.plus} alt="plus" onClick={handlePlus} />
          </div>
        </div>
        <div className={style.price}>${`${price * quantity}`}</div>
      </div>
    </div>
  );

}

export default function Cart() {
  const CartItem = useContext(CartItemContext)
  const [total, setTotal] = useState(0);

  return (
    <section className={style.container}>
      <h3 className={style.title}>購物籃</h3>
      <section className={style.list}>
        <CartItemContext.Provider value={CartItem}>
        {CartItem.map(item =>
          <Product {...item}
            setTotal={setTotal}
            key={item.id}
          />
        )}
        </CartItemContext.Provider>
        <section className={style.cart_info}>
          <div className={style.text}>運費</div>
          <div className={style.price}>免費</div>
        </section>
        <section className={style.cart_info}>
          <div className={style.text}>小計</div>
          <div className={style.price}>$ {total}</div>
        </section>
      </section>
    </section>
  );
}
