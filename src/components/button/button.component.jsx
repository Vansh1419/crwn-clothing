import './button.componenet.style.scss'
const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};
const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <div
      className={`button__container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </div>
  );
};
export default Button
