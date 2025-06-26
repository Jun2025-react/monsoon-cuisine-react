import styles from './ToggleButton.module.css';
import { useState, useEffect } from 'react';


const ToggleButton = ({ toggleObj, onToggle }) => {
    const leftBtn = toggleObj ? toggleObj.left : "On";
    const rightBtn = toggleObj ? toggleObj.right : "Off";
    const activaButton = toggleObj ? toggleObj.active : "Off";

    const [isLeftActive, setIsLeftActive] = useState(activaButton === leftBtn);
    const handleToggle = (isLeft) => {
        setIsLeftActive(isLeft);
        onToggle(isLeft ? leftBtn : rightBtn);
    };
    useEffect(() => {
        setIsLeftActive(activaButton === leftBtn);
    }, [activaButton]);

    return (
        <div class={`${styles.toggleContainer}`}>
            <button
                onClick={() => handleToggle(true)}
                className={`${isLeftActive ? styles.activeButton : styles.toggleButton}`}
            >
                {leftBtn}
            </button>
            <button
                onClick={() => handleToggle(false)}
                className={`${!isLeftActive ? styles.activeButton : styles.toggleButton}`}
            >
                {rightBtn}
            </button>
        </div>
    );
}
export default ToggleButton;