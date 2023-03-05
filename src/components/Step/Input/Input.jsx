import style from "./Input.module.css"

export default function Input({ title, placeholder, maxLength, onChange, name }) {
  return (
    <>
    <div className={style.label}>{title}</div>
    <input type="text" placeholder={placeholder} maxLength={maxLength} onChange={onChange} name={name}></input>
    </>
  );
}