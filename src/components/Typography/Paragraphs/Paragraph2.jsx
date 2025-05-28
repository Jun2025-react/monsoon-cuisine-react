const Paragraph2 = ({ children, className = '', ...props }) => {
    return (
        <p
            className={`text-secondary ${className}`}
            {...props}
            style={{ 
                fontSize: '0.85rem', 
                lineHeight: '1.5', 
                marginBottom: '0' 
            }}
        >
            {children}
        </p>
    );
}

export default Paragraph2;