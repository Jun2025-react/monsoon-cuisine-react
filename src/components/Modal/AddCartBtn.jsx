import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { Modal, Button, Container } from 'react-bootstrap';
import ChoiceBox from './ChoiceBox';


const AddCartBtn = (props) => {
    const [show, setShow] = useState(false);
    const { cartItems, removeFromCart } = useCart();
    const { item } = props;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/* Button to trigger the modal */}
            <Button variant="danger" onClick={handleShow} className="mb-2">
                Add to Cart
            </Button>

            {/* Modal itself */}
            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
            >
                <Modal.Header closeButton>
                    {/* <Modal.Title>{item.name}</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={item.image} className="img-fluid" alt="Item Image" style={{ width: "400px", }} />
                        </div>
                        {/* Item Description */}
                        <div className="col-md-6 ">
                            <div className="card border-0 border-bottom p-4" alt="Item description">
                                <h4 className="card-title fw-bold">{item.name}</h4>
                                <h6 className="card-subtitle mb-2 text-muted">$ {item.price}</h6>
                                <p className="card-text">{item.description}</p>
                            </div>
                            <ChoiceBox 
                                title = "Choice 1"
                                items = {["Choice 1", "Choice 2", "Choice 3"]}
                            />
                            <ChoiceBox 
                                title = "Choice 2"
                                items = {["Choice 4", "Choice 5", "Choice 6"]}
                            />

                        </div>

                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default AddCartBtn;
