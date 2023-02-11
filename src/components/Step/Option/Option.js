import './Option.css'
import style from '../StepOne.module.css'

function Option({ value, option }) {
  return (
    <option value={value}>
      {option}
    </option>
  );
}

function OptionGroup( {children, name} ) {
  return (
    <div className="select-container">
      <div className={style.label}>{name}</div>
        <select required>
          {children}
        </select>
    </div>
  );
}

export {Option, OptionGroup}