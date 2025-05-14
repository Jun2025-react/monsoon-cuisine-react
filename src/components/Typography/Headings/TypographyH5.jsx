const TypographyH5 = ({ children, className }) => {
    return (
        <h5 className={`fw-bold ${className}`} style={{ fontSize: "19px" }}>
            {children}
        </h5>
    )
}

export default TypographyH5;