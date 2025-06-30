import { useState } from 'react';
import TypographyH6 from "../Typography/Headings/TypographyH6";
import BorderButton from "./BorderButton";

const SelectButtons = ({ title, options, onSelect }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    if (selected?.value === option.value) {
      // deselect
      setSelected(null);
      onSelect?.(null);
    } else {
      setSelected(option);
      onSelect?.(option);
    }
  };

  return (
    <>
      <TypographyH6>{title}</TypographyH6>
      {options.map((option) => (
        <BorderButton
          key={option.value}
          option={option}
          isActive={selected?.value === option.value}
          isEnabled={option.enabled !== false} // default to true
          onClick={() => handleSelect(option)}
        />
      ))}
    </>
  );
};

export default SelectButtons;
