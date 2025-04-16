import React from 'react';
import Form from 'react-bootstrap/Form';

class OptionTextArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            special: "",
        };
    }
    handleValueChanged = (event) => {
        this.setState({ special: event.target.value });
    };
    render() {
        return (
            <Form.Group controlId="specialRequest">
                <Form.Control
                    as="textarea"
                    rows={4}
                    value={this.state.special}
                    onChange={this.handleValueChanged}
                    placeholder="Enter your special request here..."
                    style={{ resize: "none" }}
                />
            </Form.Group>
        )
    }

}
export default OptionTextArea;
