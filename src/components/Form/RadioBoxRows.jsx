import styles from './RadioBoxRows.module.css'; // Assuming you have a CSS module for styles
import { usePresentOption } from '../../context/PresentOptionContext';

const RadioBoxRow = (props) => {
    const { items } = props;
    const { updateSelectedOptions, selectedOptions } = usePresentOption();

    const handleChoiceChange = (item) => {
        updateSelectedOptions("options", item);
    };


    
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
                            // value={item.id}
                            onChange={() => handleChoiceChange(item)}
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
export default RadioBoxRow;
