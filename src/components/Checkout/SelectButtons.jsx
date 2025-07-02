import { useState } from 'react';
import TypographyH6 from "../Typography/Headings/TypographyH6";
import BorderButton from "../Button/BorderButton";
import ScheduleModal from './ScheduleModal';


const SelectButtons = ({ title, options, onSelect }) => {
  const [selected, setSelected] = useState(null);
  const [show, setShow] = useState(false);

  const handleSelect = (option) => {
    if (option.value === "scheduled") {
      setShow(true);
    }


    if (selected?.value === option.value) {
      // deselect
      setSelected(null);
      onSelect?.(null);
    } else {
      setSelected(option);
      onSelect?.(option);
    }
  };

  const handleClose = () => {
    setShow(false);
  }

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
        >
            <p className="mb-0" style={{ verticalAlign: "middle"}}>{option.label}</p>
            { !option.enabled && <small>Currently closed</small> }
        </BorderButton>
      ))}
      <ScheduleModal onHide={handleClose} show={show} />
      {selected?.value === "scheduled" && (
        <div className="alert alert-info mt-3">
          <strong>Note:</strong> Scheduled delivery is not yet implemented.
        </div>
      )}
    </>
  );
};

export default SelectButtons;
