import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from './OptionContainer.module.css'; // Assuming you have a CSS module for styles
import OptionCheckBox from './OptionCheckBox';
import OptionSpecialRequest from './OptionSpecialRequest';


class OptionContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }
    handleChoiceChange = (event) => {
        this.setState({ value: event.target.value });
    };
    render() {
        const option = this.props.option;
        const price = this.props.price;
        const { title, type, items, required } = option;

        return (
            <Card className="border-0 border-bottom" alt="Choice Box">
                <Card.Body >
                    <Card.Title className="fw-bold mb-4 d-flex justify-content-between align-items-center">
                        <div className="">{title}</div>
                        {required === true ?
                            <div className={`${styles.tagBox} ${styles.required}`}>required</div> : ""
                        }
                    </Card.Title>
                    {
                        type === "radio" ? <OptionCheckBox title={title} items={items} /> : <OptionSpecialRequest price={price}/>
                    }
                </Card.Body>
            </Card>
        )
    }

}
export default OptionContainer;
