import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useOption } from '../../context/OptionContext';

const OptionCheckBox = (props) => {
    const { title, items } = props;
    const { updateOptionValue } = useOption();

    const handleChoiceChange = (id) => {
        updateOptionValue(title, id)
    };
    return (
        <>
            {
                items.map((item, index) =>
                    <div key={`inline-radio-${index}`} className="mb-3">
                        <Form.Check
                            inline
                            key={index}
                            label={item.name}
                            name={props.title}
                            type="radio"
                            id={item.id}
                            value={item.id}
                            onChange={()=> {handleChoiceChange(item.id) }}
                        />
                    </div>
                )
            }
        </>
    )

}
export default OptionCheckBox;
