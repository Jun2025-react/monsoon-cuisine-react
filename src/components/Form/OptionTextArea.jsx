import Form from 'react-bootstrap/Form';

const OptionTextArea = (props) => {

    return (
        <Form.Group controlId="specialRequest">
            <Form.Control
                as="textarea"
                name="special"
                rows={4}
                value={props.value}
                onChange={props.onChange}
                placeholder="Enter your special request here..."
                style={{ resize: "none" }}
            />
        </Form.Group>
    );
};

export default OptionTextArea;
