import style from "./Header.module.css";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { ReactComponent as Cart } from "../assets/icons/cart.svg";
import { ReactComponent as Search } from "../assets/icons/search.svg";
import { ReactComponent as Moon } from "../assets/icons/moon.svg";
// import { ReactComponent as Sun } from "../assets/icons/sun.svg";

export default function Header() {
  return (
    <header>
      <div className={style.container}>
        {/* navbar-menu */}
        <nav className={style.menu}>
          <ul className={style.list}>
            <li className={style.item}>
              <a href="#">男款</a>
            </li>
            <li className={style.item}>
              <a href="#">女款</a>
            </li>
            <li className={style.item}>
              <a href="#">最新消息</a>
            </li>
            <li className={style.item}>
              <a href="#">客製商品</a>
            </li>
            <li className={style.item}>
              <a href="#">聯絡我們</a>
            </li>
          </ul>
        </nav>

        {/* nav-logo */}
        <a href="#" className={style.logo}>
          <Logo alt="logo" />
        </a>

        <ul className={style.bar}>
          {/* search */}
          <li className={style.item}>
            <Search alt="Search" />
          </li>
          <li className={style.item}>
            <Cart alt="cart" />
          </li>
          <li className={style.item}>
            <Moon alt="moon" />
          </li>
          {/* <li className={style.item}>
            <Sun alt="sun" />
          </li> */}
        </ul>
      </div>
    </header>
  );
}
