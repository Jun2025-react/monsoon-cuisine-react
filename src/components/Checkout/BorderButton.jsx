import React from 'react';
import styles from './BorderButton.module.css'; // assuming CSS file

const BorderButton = ({
    option = { label: "No label" },
    onClick,
    isActive = false,
    isEnabled = true,
    className = '',
}) => {
    return (
        <div
            className={`mb-2 ps-4 p-2 ${styles.card} ${isActive ? styles.active : ''} ${!isEnabled ? styles.unable : ''} ${className}`}
            onClick={isEnabled ? onClick : null}
            style={{ cursor: isEnabled ? 'pointer' : 'not-allowed' }}
        >
            <p className="mb-0" style={{ verticalAlign: "middle" }}>{option.label}</p>
            {!isEnabled && <small>Currently closed</small>}
        </div>
    );
};

export default BorderButton;