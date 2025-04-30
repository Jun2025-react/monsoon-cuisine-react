import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import AddCartModal from './AddCartModal';
import { useOption } from '../../context/OptionContext';

const AddCartBtn = (props) => {
    const [show, setShow] = useState(false);
    const { item } = props;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="danger" onClick={handleShow} className="mb-2">
                Add to Cart
            </Button>
            {/* <AddCartModal show={show} handleClose={handleClose} item={item}/> */}
        </>
    );
};

export default AddCartBtn;
