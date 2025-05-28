import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import AddCartModal from './AddCartModal';
import { PresentOptionProvider } from '../../context/PresentOptionContext';

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
            <PresentOptionProvider>
                <AddCartModal show={show} handleClose={handleClose} item={item}/>
            </PresentOptionProvider>
        </>
    );
};

export default AddCartBtn;
