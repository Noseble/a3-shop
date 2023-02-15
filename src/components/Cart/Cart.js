import style from "./Cart.module.css";
import { ReactComponent as Minus } from "../icons/minus.svg";
import { ReactComponent as Plus } from "../icons/plus.svg";

const data = [
  {
    id: "1",
    name: "貓咪罐罐",
    img: "https://lh3.googleusercontent.com/VcFxzGKZaD30VWcDx1YkWufyMRWw1WTyCIxg1_rCe4issGPi8QfGgkaxNvnaNhL5vod2iBkV8fI7Pa9fYPmJNSYlWnki7hjRP0CwJk9pIaIuzmnRN_emWonwDsrIkdL6YTRkAp-SV9rQtNY5U5d-txYNaTXxzumhbdo18uwEQ-skIuiOqzW-SaNBGbNXxuebyprgrnyHen51x-rkr8yJ8hpOgW6HcgFZjHSv4aglyhdKnqqkI8nnRinpam5qm1MOuCgv85Jf8hEWTe4ubAAko-84i8XzdlDdQ_yBbdoHtDDIT_9azvKEXpMJVkpG1EsCWPguTdiZB1fiH0Gr-bId0-RWeD8HKl0vP_L_xvJ3NsAF8MhmPzjpKu1VblzUTRFnNimZi5VDDz0gdHZ25ihy3Yf9F6g5ewCd98Eqn43U-hlikGuRNt4GygF6skmD06cTteK-rdSr2Nu8BYBrSKsV-pgDe5xs1d6zBn3Bf0mtW1sG_tXgXrZNJ1WA0WyuKBtRoaZchYf4ZXrFG1lJ653Il-nM95-iZN0vvlLLqNgwxFDisMo7Y2C2WflucAspMEFMsX5R-9SzCG9-f3Yn09Ad1e4QV8RuHDK84mFo6bjgo55919cB4jVBVqqVegoGDMBAr3tkdk99NqhdHNvKoSajfmDrMyCOQcmlswD0Nf4MIVaM24E8o-fMIWL2KqfOjxJBlcV3J-MaINNIfTzXyh9YXYjVJhXc81db7eX19qvXx_gF2g3HIn65ediXynmqPj5VNwEs2RxILvSE1Gm3h8CnYcSYaX4AypuB5vX2tXYqj2fF152oRnulf2OkmI0dpwDIQUBVZMgxw48xGERW7gfk21Hgca20SepHCy_iZF5cT8xeWq7AdfQI4D1VgauDRSn3dbYYFsOB3Vt5ZtiCUZL4D0rg_dkpXCPVCeNaPLvT7QGdxw=s937-no?authuser=0",
    price: 100,
    quantity: 2,
  },
  {
    id: "2",
    name: "貓咪干干",
    img: "https://lh3.googleusercontent.com/qf_PRd_QFgouqJG8bYEMrOSoyPfDFrVGZ0xB4BjtRsuoBhkNUOdjS445iLyCrBMyLfW_IYtvitYnRIliebA_8KCUjIx1pMdQE0IMUwWklrBgjI4qLySFFcuManeniPVNgQJz3aDppLRy_Lgele5oiY0BgLyFD2YMI4lQ-P6XponMS1QdUHAYmoPtpUqppWxmDNkmagqB7aiB7MBCh09eZ3ecz6bQLkGDG9m1RtwN5KjujHtF7Uer3esS2BUwb_8KLFSVdeqeNJzoqrfH1fXd1_ulHavZRhYeo_4MZCOwSJw04-J5V8juznO24w2Da1Vwrb4swAn8VqYetzbx11PPoSXtnVVwPrrjudCzHe-hOEm7JzxInLbJ0JSTjqsZyjC4DHgWzQbMHTnGiaqilulPOLQPWjCMbuH-f_T-7aXiCnK55HCHiVPE00TX2XpyQJ-P5vg75BbqDk9NHEJ3nRB7QsM8_8002VAXRh_lufQACi0Q4gxkOIsAnJv93zW9zsUJ5EcJyTZnpNIl-mS6Flx37_2AiCNH3wo3CqXG_3x-0QcVAAsTriWcet0CTwvHGDlNcLus30oGSzhGtbU5pbQBNc68h-j97cVYF7A7-kS9JkZf5_PNqaQXPDz2Rp5JQWOv-kQ4Qjz6DrSctgBfoEvc4ji3fJkR5M-oWclh0NrZHlC7WX4Zj9FpVXiz5OjT_CsvBGNMXe3VMYLkfQAOZ3QUzNxgNdAB3dhTgZAnOBbeEhI5Qtg9b0x9yyp_6A2fpw2somgKUJGdm5BbBT5ZOoieXOYTId2l1piGgbn2UhrnZVm6pR4fbhOnCJlbA0udpzi_8geYN4OgiHp2PUAHOJXMeQQQRvhbBH6hG7NC95AesV5anpNUXveE7G3pJBXSHkQWsvTOIIdN3ihj1V6iPzx7KmyOkp5p3fBTUX8kKsA94qRwzg=s937-no?authuser=0",
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
