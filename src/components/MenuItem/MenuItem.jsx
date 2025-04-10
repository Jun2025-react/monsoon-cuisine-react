import React from "react";
import style from "./MenuItem.module.css";
const MenuItem = ({ item }) => {
    
    return (
        <div className="col-md-4" key={item.id}>
        <div className={`card ${style.menuItemCard} text-white border-0 h-100`}>
            <img src={item.src} alt={item.name} className={`card-img-top ${style.menuItemImage}`}/>
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
            </div>
            <div className="card-footer bg-transparent border-0">
                <p className="text-danger fw-bold mb-0">{item.price}</p>
            </div>
        </div>
    </div>
    )
}

export default MenuItem;