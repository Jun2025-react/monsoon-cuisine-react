import Styles from "./FloatingText.module.css";

const FloatingTextBox = ({
  label,
  value,
  onChange,
  type = "text",
  disabled = false,
  readOnly = false,
  onClick = () => { },
  className,
  height = 0
}) => {
  const isActive = !!value;

  return (
    <div className={`${Styles.floatingTextBox} ${isActive ? Styles.active : ""} ${className}`}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required
        disabled={disabled}
        onClick={() => { onClick() }}
        readOnly={readOnly}
        // style={{ height: height ? `${height}px` : "auto", paddingLeft: 20 }}
      />
      <label>{label}</label>
    </div>
  );
};

export default FloatingTextBox;
