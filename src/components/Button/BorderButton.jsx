import React from 'react';
import styles from './BorderButton.module.css'; // assuming CSS file

const BorderButton = ({
    option = { label: "No label" },
    onClick,
    isActive = false,
    isEnabled = true,
    className = '',
    children = null,
}) => {
    const handleClick = (e) => {
        if (!isEnabled) {
            e.preventDefault();
            return;
        }
        onClick?.(e);
    };
    return (
        <div
            className={`mb-2 p-4 ${styles.card} ${isActive ? styles.active : ''} ${!isEnabled ? styles.unable : ''} ${className}`}
            onClick={handleClick}
            style={{ cursor: isEnabled ? 'pointer' : 'not-allowed' }}
        >
            {children}
        </div>
    );
};

export default BorderButton;