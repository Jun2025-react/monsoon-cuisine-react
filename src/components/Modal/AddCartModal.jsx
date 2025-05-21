import { Modal } from 'react-bootstrap';
import { useOption } from '../../context/OptionContext';
import styles from './AddCartModal.module.css'; // Assuming you have a CSS module for styles
import TypographyH4 from '../Typography/Headings/TypographyH4';
import TypographyH6 from '../Typography/Headings/TypographyH6';
import OptionCheckBox from '../Form/OptionCheckBox';
import OptionRadioBox from '../Form/OptionRadioBox';
import OptionSpecialRequest from '../Form/OptionSpecialRequest';

const AddCartModal = (props) => {

    const { show, item, handleClose } = props;
    const { optionValues, removeOptionValue } = useOption();

    const options = item.item_options;
    const addons = item.item_addons;

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
            <Modal.Body style={{ minWidth: "700px" }}>
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
                            options.length > 0 && <OptionRadioBox title={"Options"} items={options} />
                        }
                        {
                            addons.length > 0 && <OptionCheckBox title="Add_ons" items={addons} />
                        }
                        <OptionSpecialRequest item={item} />
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default AddCartModal;