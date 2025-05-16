import React from 'react';
import { Modal } from 'react-bootstrap';
import ItemOptions from './ItemOptions';
import { useOption } from '../../context/OptionContext';
import styles from './AddCartModal.module.css'; // Assuming you have a CSS module for styles
import TypographyH4 from '../Typography/Headings/TypographyH4';
import TypographyH6 from '../Typography/Headings/TypographyH6';
import OptionCheckBox from '../Form/OptionCheckBox';

const AddCartModal = (props) => {

    const { show, item, handleClose } = props;
    // const sortedOptions = [...item.options].sort((a, b) => a.order - b.order);
    const { optionValues, removeOptionValue } = useOption();
    const options = item.item_options;
    const addons = item.item_addons;

    console.log("item=======: ", item);
    console.log("options: ", options);
    console.log("addons: ", addons);
    
    const onHide = () => {
        Object.keys(optionValues).forEach((key) => {
            removeOptionValue(key);
        })
        handleClose();
    }

    return (
        <Modal
            size="lg"
            show={show}
            onHide={onHide}
            key={item.id}
            dialogClassName={styles.customModal}
            >
            <Modal.Header closeButton />
            <Modal.Body style={{ minWidth: "700px"}}>
                <div className="row">
                    <div className="col-md-6">
                        <img src={item.image_path} className="img-fluid" alt="Item" style={{ width: "400px", }} />
                    </div>
                    {/* Item Description */}
                    <div className="col-md-6 ">
                        <div className="card border-0 border-bottom p-2" alt="Item description">
                            <TypographyH4>{item.name}</TypographyH4>
                            <TypographyH6 className="mb-1 text-muted">$ {item.price}</TypographyH6>
                            <p className={styles.description}>{item.description}</p>
                        </div>
                        {
                            options.length && <OptionCheckBox type="radio" title={"Options"} items={options} />
                        }
                        {
                            addons.length && <ItemOptions type="checkbox" title="Add_ons" item={addons}/>
                        }
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default AddCartModal;