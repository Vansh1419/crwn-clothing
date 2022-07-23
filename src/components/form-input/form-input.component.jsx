import "./form-input.component.style.scss";
const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form__input" {...otherProps} />
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form__input__label`}
      >
        {label}
      </label>
    </div>
  );
};
export default FormInput;
