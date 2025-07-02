import { Modal } from 'react-bootstrap';
import styles from './ScheduleModal.module.css';
import BorderButton from '../Button/BorderButton';
import { useState } from 'react';

const ScheduleModal = ({ show, onHide }) => {

    const [ hideButton, setHideButton ] = useState("left");

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const today = new Date();
    const currentDayIndex = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const daysOfWeekAdjusted = [...daysOfWeek.slice(currentDayIndex), ...daysOfWeek.slice(0, currentDayIndex)];

    const closeDay = 'Tue';
    const daysOption = daysOfWeekAdjusted.map((day, index) => {
        const dayDate = new Date(today);
        dayDate.setDate(today.getDate() + index); // Adjust date based on index

        let label = day.slice(0, 3);
        if (index === 0) label = "Today";
        else if (index === 1) label = "Tomorrow";

        return {
            label: label,
            label2: `${dayDate.getDate()} ${monthsOfYear[dayDate.getMonth()]}`,
            value: day.toLowerCase(),
            isEnabled: day !== closeDay, // Disable the close day
            isActive: false, // Initially not active
        };
    });


    const onClickArrow = (direction) => {
        const scrollAmount = 300;
        const scrollContainer = document.querySelector(`.${styles.horizontalScroll}`);
        if (!scrollContainer) return;
        if (direction === 'left') {
            setHideButton("left");
        } else {
            setHideButton("right");
        }

        scrollContainer.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    };
    return (
        <Modal
            size="lg"
            show={show}
            onHide={() => onHide()}
            centered
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton >
                <Modal.Title>Schedule Delivery</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className={`horizontal-scrollable`}>
                    { /* Day Selector */}
                    <div className={`position-relative`}>
                        { /* Arrow Buttons */}
                        <div className={`d-flex justify-content-between position-absolute w-100`} style={{ top: 16 }}>
                            <button className={`${styles.arrowBtn} ${hideButton === "left" ? styles.hide : ""}`} onClick={() => onClickArrow('left')} aria-label="Scroll Left">
                                <i className="fas fa-arrow-left"></i>
                            </button>
                            <button className={`${styles.arrowBtn}  ${hideButton === "right" ? styles.hide : ""} `} onClick={() => onClickArrow('right')} aria-label="Scroll Right">
                                <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>
                        <div name="items" className={`d-flex ${styles.horizontalScroll} gap-3`}>
                            {daysOption.map((day, index) => (
                                <BorderButton
                                    className="text-center"
                                    key={index}
                                    option={day}
                                    isActive={day.isActive}
                                    isEnabled={day.isEnabled}
                                    onClick={() => {
                                        if (day.isEnabled) {
                                            // Handle day selection logic here
                                            console.log(`Selected day: ${day.label}`);
                                        }
                                    }}
                                >
                                    <p className="mb-0" style={{ verticalAlign: "middle", pointer: day.isEnabled ? "pointer" : "not-allowed", width: 80 }}>{day.label}</p>
                                    <p className="mb-0" style={{ fontSize: 14 }}>{`${day.label2}`}</p>
                                    {!day.isEnabled && <small>closed</small>}
                                </BorderButton>
                            ))}
                        </div>
                    </div>
                    { /* Time Selector */}
                </div>
                <div className={`vertical-scrollable`}>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-secondary" onClick={() => onHide()}>
                    Close
                </button>
                <button className="btn btn-primary" onClick={() => onHide()}>
                    Confirm
                </button>
            </Modal.Footer>
        </Modal>
    )
}

export default ScheduleModal;