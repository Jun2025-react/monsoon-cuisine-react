import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
// import { useOption } from '../../context/OptionContext';
import styles from './OptionCheckBox.module.css'; // Assuming you have a CSS module for styles


const OptionCheckBox = (props) => {
    const { title, items, type } = props;
    const [quantity, setQuantity] = useState(0);

    // const { updateOptionValue } = useOption();

    const handleChoiceChange = (id) => {
        // updateOptionValue(title, id)
    };

    const [selected, setSelected] = useState(false);

    const handleCheck = (id) => {
        setSelected((prev) => ({
            ...prev,
            [id]: { ...prev[id], checked: !prev[id]?.checked || false }
        }));
    }
    const handleQuantity = (id, val) => {
        console.log("id : ", id);
        console.log("quantity : ", val);
        setQuantity(val);
        // setSelected((prev) => ({
        //     ...prev,
        //     [id]: { ...prev[id], quantity: !prev[id] }
        // }))
    }


    return (
        <>
            {
                items.map((item, index) =>
                    <label
                        key={index}
                        htmlFor={`radio-${item.id}`}
                        className={styles.radioRow}
                    >
                        <input
                            type="radio"
                            id={`radio-${item.id}`}
                            name={props.title}
                            value={item.id}
                            onChange={() => handleChoiceChange(item.id)}
                            className={styles.hiddenRadio}
                        />
                        <span className={styles.labelText}>{item.name}</span>
                        <span className={styles.customCircle}></span>
                    </label>
                    // <Row key={`inline-radio-${index}`} className="mb-3">
                    //     <Col xs="auto" className="w-75">
                    //         <Form.Check
                    //             inline
                    //             key={index}
                    //             label={item.name}
                    //             name={props.title}
                    //             type={props.type}
                    //             id={item.id}
                    //             value={ item.id}
                    //             // onChange={() => { handleChoiceChange(item.id) }}
                    //             onChange={() => { handleCheck(item.id) }}
                    //         />
                    //     </Col>
                    //     {selected &&
                    //         <Col xs="auto" className="w-25">
                    //             <Form.Control
                    //                 inline
                    //                 key={index}
                    //                 name={props.title}
                    //                 type="number"
                    //                 min={quantity}
                    //                 onChange={(e) => {
                    //                     handleQuantity(item.id, e.target.value)
                    //                 }}
                    //             />
                    //         </Col>
                    //     }
                    // </Row>
                )

            }
        </>
    )

}
export default OptionCheckBox;
