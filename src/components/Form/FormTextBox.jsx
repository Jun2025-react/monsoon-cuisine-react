import Form from 'react-bootstrap/Form';

const FormTextBox = ({
    className = "",
    name = "",
    value = "",
    precheck = false,
    useValidationText = false,
    required = false,
    onChange = () => { }
}) => {

    const firstName = { "placeholder": "First Name", "type": "text" };
    const lastName = { "placeholder": "Surname", "type": "text" };
    const email = { "placeholder": "Email", "type": "email" };
    const mobile = { "placeholder": "Mobile Number", "type": "tel" };
    const password = { "placeholder": "Pasword", "type": "password" };
    const confirmPassword = { "placeholder": "Confirm Password", "type": "password" };
    const defaultSet = { "placeholder": "", "type": "text" };
    const address_1 = { "placeholder": "Address 1", "type": "text" };
    const address_2 = { "placeholder": "Address 2", "type": "text" };

    const preset = {
        "first_name": firstName,
        "last_name": lastName,
        "email": email,
        "mobile": mobile,
        "password": password,
        "confirm_password": confirmPassword,
        "address_1": address_1,
        "address_2": address_2,
        "default": defaultSet
    };

    const selectedObj = preset[name] ? preset[name] : preset["default"];
    const validCheck = () => {
        if (!precheck) {
            return false;
        }
        return !value;
    }
    return (
        <>
            <Form.Control
                required={required}
                className={`py-2 ${className}`}
                type={selectedObj? selectedObj.type : ""}
                placeholder={selectedObj? selectedObj.placeholder : ""}
                name={name}
                value={value}
                onChange={onChange}
                isInvalid={validCheck()}
            />
            {useValidationText && <Form.Control.Feedback type="invalid" style={{ paddingLeft: 5 }}>
                This field is required
            </Form.Control.Feedback>
            }
        </>
    )
}
export default FormTextBox;