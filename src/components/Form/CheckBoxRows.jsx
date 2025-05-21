import React, { useState } from 'react';
import { useOption } from '../../context/OptionContext';
import styles from './CheckBoxRows.module.css'; // Assuming you have a CSS module for styles

const CheckBoxRows = (props) => {
    const { title, items } = props;
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
                        htmlFor={`checkbox-${item.id}`}
                        className={styles.radioRow}
                    >
                        <input
                            type="checkbox"
                            id={`checkbox-${item.id}`}
                            name={props.title}
                            value={item.id}
                            onChange={() => handleChoiceChange(item.id)}
                            className={styles.hiddenInput}
                        />
                        <div className={styles.labelTextBlock}>
                            <div className={styles.labelText}>{item.name}</div>
                            {Number(item.price) > 0 && <div className={styles.labelPrice}>{`+${item.price}`}</div>}
                        </div>
                        <span className={styles.customChecked}></span>
                    </label>
                )

            }
        </>
    )

}
export default CheckBoxRows;
