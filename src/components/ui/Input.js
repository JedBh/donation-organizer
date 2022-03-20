import classes from "./Input.module.css";

function Input(props) {
  return (
    <div className={classes.relContainer}>
      <div className={classes.container}>
        <input
          type={props.type}
          name="name"
          className={classes.question}
          id={props.id}
          required
          autocomplete="off"
        />
        <label htmlFor={props.id}>
          <span>{props.label}</span>
        </label>
      </div>
    </div>
  );
}

export default Input;
