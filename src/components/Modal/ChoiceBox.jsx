import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

class ChoiceBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedChoice: null,
        };
    }
    handleChoiceChange = (event) => {
        this.setState({ selectedChoice: event.target.value });
    };
    render() {
        return (
            <Card className="border-0 border-bottom" alt="Choice Box">
                <Card.Body >
                    <Card.Title className="fw-bold mb-4">{this.props.title}</Card.Title>
                    {
                        this.props.items.map((choice, index) => 
                            <div key="inline-radio" className="mb-3">
                                <Form.Check
                                    inline
                                    label={choice}
                                    name={this.props.title}
                                    type="radio"
                                    id={choice}
                                    value={choice}
                                    onChange={this.handleChoiceChange}
                                />
                            </div>
                        )
                    }
                </Card.Body>
            </Card>
        )
    }

}
export default ChoiceBox;
