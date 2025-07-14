import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import ShoppingCartLists from '../ShoppingCart/ShoppingCartLists';
import { useCart } from '../../context/CartContext'; // Assuming you have a CartContext for managing cart state

const FoldableCard = (
    {
        title = "No title",
        onToggle = () => { },
        items = [],
        handleFetch = () => {},
    }
) => {

    const [show, setShow] = useState(false);
    const toggleItems = () => setShow(prev => !prev);

    const onClickToggle = () => {
        toggleItems();
        onToggle();
    }

    useEffect(()=> {
        if(show){
            handleFetch();
        }
    },[show]);
    
    return (
        <>
            <div className="mb-2 d-flex justify-content-between align-items-center border-bottom">
                <p className="mb-1 fw-bold">{title}</p>
                <button
                    onClick={onClickToggle}
                    className="btn p-0 m-0"
                    style={{ fontSize: 16 }}
                    aria-label="Toggle Cart Items"
                >
                    <i className={`p-3 fas ${show ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                </button>
            </div>

            {
                show && (
                    <div className="mb-3">
                        <ShoppingCartLists items={items} handleFetch={handleFetch}/>
                    </div>
                )
            }
        </>
    )
}

export default FoldableCard;