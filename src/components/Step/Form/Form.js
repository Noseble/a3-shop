import style from'./Form.module.css'

function Form( { phase, title, children } ) {
  return (
    <section className={style.container}>
      <form data-phase={phase}>
        <h3 className="form-title">{title}</h3>
          <section className={style.body}>
            {children}
          </section>
      </form>
    </section>    
  );
}

export default Form