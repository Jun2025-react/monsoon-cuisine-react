import { usePresentOption } from '../../context/PresentOptionContext';
import styles from './CheckBoxRows.module.css'; // Assuming you have a CSS module for styles

const CheckBoxRows = (props) => {
    const { title, items } = props;
    const { updateSelectedOptions, selectedOptions, removeAddonItem } = usePresentOption();
    const handleChoiceChange = (e, item) => {
        if(e.target.checked) {
            updateSelectedOptions("addons", item);
        } else {
            removeAddonItem(item);
        }
    };

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
                            // value={item.id}
                            onChange={(e) => handleChoiceChange(e, item)}
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
