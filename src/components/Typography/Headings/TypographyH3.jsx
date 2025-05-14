const TypographyH3 = ({ children, className }) => {
    return (
        <h3 className={`fw-bold ${className}`}>
            {children}
        </h3>
    )
}

export default TypographyH3;