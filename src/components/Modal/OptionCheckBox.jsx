import React from 'react';
import Form from 'react-bootstrap/Form';

class OptionCheckBox extends React.Component {
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
            <>
                {
                    this.props.items.map((item, index) =>
                        <div key={`inline-radio-${index}`} className="mb-3">
                            <Form.Check
                                inline
                                key={index}
                                label={item.name}
                                name= {this.props.title}
                                type="radio"
                                id={item.id}
                                value={item.id}
                                onChange={this.handleChoiceChange}
                            />
                        </div>
                    )
                }
            </>
        )
    }

}
export default OptionCheckBox;
