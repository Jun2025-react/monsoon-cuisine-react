import React from 'react';
import styles from './FloatingImage.module.css';


const FloatingImage = ( props ) => {
    const {src, alt, isFading} = props;

    return (
        <img
            src={src}
            alt={alt}
            className={`${isFading ? styles.hidden : styles.show}`}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
    );
}

export default FloatingImage;