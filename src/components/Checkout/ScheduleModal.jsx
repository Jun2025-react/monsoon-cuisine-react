import { Modal } from 'react-bootstrap';
import styles from './ScheduleModal.module.css';
import BorderButton from '../Button/BorderButton';
import { useState, useEffect } from 'react';
import { useCheckout } from '../../context/CheckoutContext';
import { u_getScheduleDaysOption, u_getTimeOption } from '../../services/TimeUtils';

const OPEN_TIME = "12:00";
const CLOSE_TIME = "21:30";

const ScheduleModal = ({ show, onHide }) => {
    const openingTime = OPEN_TIME;
    const closingTime = CLOSE_TIME;

    const daysOption = u_getScheduleDaysOption();
    const defaultTimeSlot = u_getTimeOption({ openingTime, closingTime, isToday: true });

    const [timeSlots, setTimeSlots] = useState(defaultTimeSlot);

    const [hideButton, setHideButton] = useState("left");
    const [selectedDay, setSelectedDay] = useState(daysOption[0].value);
    const [selectedTime, setSelectedTime] = useState(defaultTimeSlot[0]);

    const { setScheduleDay, setScheduleTime, checkoutDay, checkoutTime } = useCheckout();

    useEffect(() => {
        if( !checkoutDay && !checkoutTime){
            onInitialized();
        }
    }, [show])


    const onInitialized = () => {
        const todayTimeSlots = u_getTimeOption({ openingTime, closingTime, isToday: true });
        
        setSelectedDay(daysOption[0].value);
        setSelectedTime(todayTimeSlots[0]);
        setTimeSlots(todayTimeSlots);
    }

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

    const onClickDayButton = (day) => {
        if (day.isEnabled) {
            setSelectedDay(day.value);
        }
        const openingTime = OPEN_TIME;
        const closingTime = CLOSE_TIME;
        const timeSlot = u_getTimeOption({ openingTime, closingTime, isToday: day.label.toLowerCase() === "today" });
        setTimeSlots(timeSlot);
    }

    const onClickTimeButton = (time) => {
        setSelectedTime(time);
    }

    const onClickClose = () => {
        setSelectedDay(daysOption[0].value);
        setSelectedTime(defaultTimeSlot[0]);

        setScheduleDay(null);
        setScheduleTime(null);

        onHide();
    }

    const onClickConfirm = () => {
        setScheduleTime(selectedTime);
        setScheduleDay(selectedDay);
        console.log("checkoutDay :::: ", checkoutDay);
        console.log("checkoutTime :::: ", checkoutTime);
        onHide();
    }

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
                        <div className={`d-flex justify-content-between position-absolute w-100 ${styles.arrowContainer}`} style={{ top: 16 }}>
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
                                    isActive={selectedDay === day.value}
                                    isEnabled={day.isEnabled}
                                    onClick={() => onClickDayButton(day)}
                                >
                                    <p className="mb-0" style={{ verticalAlign: "middle", pointer: day.isEnabled ? "pointer" : "not-allowed", width: 80 }}>{day.label}</p>
                                    <p className="mb-0" style={{ fontSize: 14 }}>{`${day.label2}`}</p>
                                    {!day.isEnabled && <small>closed</small>}
                                </BorderButton>
                            ))}
                        </div>
                    </div>
                    { /* Time Selector */}
                    <div className="time-list" style={{ height: 400, overflowY: "auto" }}>
                        {timeSlots.map((slot, index) => (
                            <div
                                key={index}
                                className="time-item d-flex justify-content-between align-items-center p-3 border-bottom"
                                onClick={() => onClickTimeButton(slot)}
                                style={{ cursor: "pointer" }}
                            >
                                <span>{slot}</span>
                                <div className={`${styles.radioCircle} ${selectedTime === slot ? `${styles.selected}` : ""}`} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className={`vertical-scrollable`}>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-secondary" onClick={onClickClose}>
                    Close
                </button>
                <button className="btn btn-primary" onClick={onClickConfirm}>
                    Confirm
                </button>
            </Modal.Footer>
        </Modal>
    )
}

export default ScheduleModal;