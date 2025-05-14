const TypographyH2 = ({ children, className }) => {
    return (
        <h2 className={`fw-bold ${className}`}>
            {children}
        </h2>
    )
}

export default TypographyH2;