import React from 'react';
import styles from './FloatingImage.module.css';


const FloatingImage = ( props ) => {
    const {src, alt, isFading} = props;

    return (
        <img
            src={src}
            alt={alt}
            className={`${isFading ? styles.hidden : styles.show}`}
        />
    );
}

export default FloatingImage;