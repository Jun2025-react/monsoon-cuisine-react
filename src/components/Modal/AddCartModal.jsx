import React from 'react';
import { Modal } from 'react-bootstrap';
import OptionContainer from './OptionContainer';
import { useOption } from '../../context/OptionContext';


const AddCartModal = (props) => {

    const { show, item, handleClose } = props;
    const sortedOptions = [...item.options].sort((a, b) => a.order - b.order);
    const { optionValues, removeOptionValue } = useOption();

    const onHide = () => {
        Object.keys(optionValues).forEach((key) => {
            removeOptionValue(key);
        })
        handleClose();
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            key={item.name}
        >
            <Modal.Header closeButton />
            <Modal.Body>
                <div className="row">
                    <div className="col-md-6">
                        <img src={item.image} className="img-fluid" alt="Item" style={{ width: "400px", }} />
                    </div>
                    {/* Item Description */}
                    <div className="col-md-6 ">
                        <div className="card border-0 border-bottom p-2 pb-4" alt="Item description">
                            <h4 className="card-title fw-bold">{item.name}</h4>
                            <h6 className="card-subtitle mb-2 text-muted">$ {item.price}</h6>
                            <p className="card-text">{item.description}</p>
                        </div>
                        {
                            sortedOptions.map((option) =>                                 // if (option.type === "radio") {
                                <OptionContainer
                                    option={option}
                                    price={item.price}
                                    key={item.id}
                                    item={item}
                                />
                            )
                        }
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default AddCartModal;