import React from 'react';
import AddCartBtn from './Modal/AddCartBtn';

const MenuItem = ({ item, index, button, cardClass }) => {
    cardClass = !!cardClass ? cardClass : "";
    return (
        <div className="col-md-4 px-2 pb-3" key={index}>
            <div className={`card text-center ${cardClass}`} >
                <img src={item.image} className="card-img-top" alt="Item Image" />
                <div className="card-body ">
                    <h5 className="card-title fw-bold">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                </div>
                <div className="card-footer bg-transparent border-0">
                    <p className="text-danger fw-bold mb-3">$ {item.price}</p>
                    {button &&
                        <AddCartBtn item={item} />
                    }
                </div>
            </div>
        </div>
    )
}

export default MenuItem;