import { useState, useRef, useEffect } from "react";
import Styles from "./FloatingSelect.module.css";

const FloatingSelect = ({ label, options, value, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const handleSelect = (opt) => {
    onChange(opt);
    setOpen(false);
  };

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setOpen(false);
    }
  };

  const isSelected = !!value ;
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={ref}
      className={`${Styles.floatingSelect} ${isSelected ? Styles.active : ""}`}>
      <label>{label}</label>
      <div
        className={Styles.selectBox}
        onClick={() => setOpen(!open)}
      >
        {value || ""}
      </div>
      {open && (
        <ul className={Styles.options}>
          <option value="" disabled hidden></option>

          {options.map((opt, idx) => (
            <li
              key={idx}
              onClick={() => handleSelect(opt)}
              className={`${Styles.option} ${opt === value ? Styles.selectedOption : ""}`}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FloatingSelect;
(
  <>
  </>
);

