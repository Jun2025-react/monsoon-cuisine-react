import React from 'react';

const Map = (props) => {
    const height = props.height || 400;
    return (
        <iframe
            title="google_map"
            width="100%"
            height= {height}
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps?q=Monsoon+Indian+Cuisine+Browns+Bay+NZ&output=embed">
        </iframe>
    )
}

export default Map;