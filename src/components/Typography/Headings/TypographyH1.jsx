const TypographyH1 = ({ children, className }) => {
    return (
        <h1 className={`fw-bold ${className}`}>
            {children}
        </h1>
    )
}

export default TypographyH1;