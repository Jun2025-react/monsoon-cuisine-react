import React from 'react';
import OptionTextArea from './OptionTextArea';
import styles from './OptionContainer.module.css';
import Form from 'react-bootstrap/Form';

class OptionSpecialRequest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            special: "",
            totalPrice: this.props.price || 0,
            price: this.props.price || 0,
            count: 1,
        };
    }

    componentDidMount() {
        console.log("this props : ", this.props);
        const { price } = this.props;
        this.setState({ price: price });
        this.calcTotalPrice();
    }

    handleValueChanged = (event) => {
        this.setState({ special: event.target.value });
    };
    handleSelectChange = (event) => {
        const selectedValue = Number(event.target.value);
        this.setState({ count: selectedValue });
        this.calcTotalPrice(selectedValue);

    }
    calcTotalPrice = (selectedValue) => {
        selectedValue = selectedValue || this.state.count;
        const totalPrice = this.state.price * selectedValue;
        this.setState({ totalPrice: totalPrice });
        console.log("state ++:: ", this.state);
    }

    render() {
        const number = 20;
        const numberArrays = Array.from({ length: number }, (_, i) => i + 1);
        return (
            <>
                <OptionTextArea
                    onChange={this.handleValueChanged}
                />
                <div class={`${styles.inform}`}>
                    Option may charge extra for special request.
                </div>
                <Form.Select
                    size={6}
                    style={{width: "80px"}}
                    onChange= {(e)=> this.handleSelectChange(e) }
                >
                    {
                        numberArrays.map((i) =>
                            <option value={i}>{i}</option>
                        )
                    }
                </Form.Select>
                {this.state.totalPrice}
            </>
        )
    }

}
export default OptionSpecialRequest;
