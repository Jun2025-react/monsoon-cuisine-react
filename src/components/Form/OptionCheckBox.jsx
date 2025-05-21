import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import TypographyH5 from '../Typography/Headings/TypographyH5';
import CheckBoxRows from './CheckBoxRows';

const OptionCheckBox = (props) => {
    const title = props.title;
    const items = props.items;

    return (
        <Card className="border-0 border-bottom" alt="Choice Box">
            <Card.Body >
                <TypographyH5 >{title}</TypographyH5>
                {
                    <CheckBoxRows
                        title={title}
                        items={items}
                    />
                }

            </Card.Body>
        </Card>
    )
}

export default OptionCheckBox;