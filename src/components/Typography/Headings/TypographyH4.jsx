const TypographyH4 = ({ children, className }) => {
    return (
        <h4 className={`fw-bold ${className}`} style={{ margin: "0px" }}>
            {children}
        </h4>
    )
}

export default TypographyH4;