import style from "./Input.module.css"

export default function Input({ name, placeholder, maxLength }) {
  return (
    <>
    <div className={style.label}>{name}</div>
    <input type="text" placeholder={placeholder} maxLength={maxLength}></input>
    </>
  );
}