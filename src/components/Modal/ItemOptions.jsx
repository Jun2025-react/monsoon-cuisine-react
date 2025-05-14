import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import OptionCheckBox from './OptionCheckBox';
import TypographyH5 from '../Typography/Headings/TypographyH5';

const ItemOptions = (props) => {
    
    const title = props.title;
    const type = props.type;
    const items = props.item;
    console.log("optionAddOn : ", items);

    return (
        <Card className="border-0 border-bottom" alt="Choice Box">
            <Card.Body >
                <TypographyH5 >{title}</TypographyH5>
                <OptionCheckBox title={title} type={type} items={items} />
            </Card.Body>
        </Card>
    )

}
export default ItemOptions;
