import React, { useState } from 'react';
import { useOption } from '../../context/OptionContext';
import styles from './CheckBoxRow.module.css'; // Assuming you have a CSS module for styles

const CheckBoxRow = (props) => {
    const { title, items, type } = props;
    const { updateOptionValue } = useOption();

    const handleChoiceChange = (id) => {
        updateOptionValue(title, id)
    };

    const [selected, setSelected] = useState(false);

    const handleCheck = (id) => {
        setSelected((prev) => ({
            ...prev,
            [id]: { ...prev[id], checked: !prev[id]?.checked || false }
        }));
    }

    return (
        <>
            {
                items.map((item, index) =>
                    <label
                        key={index}
                        htmlFor={`radio-${item.id}`}
                        className={styles.radioRow}
                    >
                        <input
                            type="radio"
                            id={`radio-${item.id}`}
                            name={props.title}
                            value={item.id}
                            onChange={() => handleChoiceChange(item.id)}
                            className={styles.hiddenRadio}
                        />
                        <span className={styles.labelText}>{item.name}</span>
                        <span className={styles.customCircle}></span>
                    </label>
                )

            }
        </>
    )

}
export default CheckBoxRow;
