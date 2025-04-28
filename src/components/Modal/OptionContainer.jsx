import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import styles from './OptionContainer.module.css'; // Assuming you have a CSS module for styles
import OptionCheckBox from './OptionCheckBox';
import OptionSpecialRequest from './OptionSpecialRequest';
import { useOption } from '../../context/OptionContext';

const OptionContainer = (props) => {

    const { optionValues } = useOption()
    const option = props.option;
    const price = props.price;
    const item = props.item;
    const { title, type, items, required } = option;
    const [ checkTagClass , setCheckTagClass ] = useState(styles.unChecked);

    useEffect(()=> {
        optionValues.hasOwnProperty(title) ?
            setCheckTagClass(styles.checked) : setCheckTagClass(styles.unChecked);
    }, [checkTagClass])

    return (
        <Card className="border-0 border-bottom" alt="Choice Box">
            <Card.Body >
                <Card.Title className="fw-bold mb-4 d-flex justify-content-between align-items-center">
                    <div className="">{title}</div>
                    {required === false ? "" :
                        optionValues.hasOwnProperty(title) ?
                            <div className={`${styles.tagBox} ${styles.checked}`}>required</div> :
                            <div className={`${styles.tagBox} ${styles.unChecked}`}>required</div>
                    }
                </Card.Title>
                {
                    type === "radio" ? <OptionCheckBox title={title} items={items} /> : <OptionSpecialRequest price={price} item={item} />
                }
            </Card.Body>
        </Card>
    )

}
export default OptionContainer;
