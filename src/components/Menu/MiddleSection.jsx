import React from 'react';
import styles from "./MiddleSection.module.css";
import MenuItem from '../MenuItem';

const MiddleSection = () => {
    const menuItems = [
        {
            id: 1,
            name: "Item Name 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo",
            price: 18,
            image_path: "assets/images/chicken-removebg-preview.png",
        },
        {
            id: 2,
            name: "Item Name 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo",
            price: 18,
            image_path: "assets/images/biryanis-removebg-preview.png",
        },
        {
            id: 3,
            name: "Item Name 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo",
            price: 18,
            image_path: "assets/images/meat-samosa-removebg-preview.png",
        },
    ];

    const TITLE = "Our Best Menu";
    const PARAGRAPH = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo";

    return (
        <section className={`py-5 ${styles.menuCard}`} >
            <div className="container text-center">

                <h1 className="fw-bold text-danger mb-3">{TITLE}</h1>
                <p className="mb-4">{PARAGRAPH}</p>

                <div className="row g-4 d-flex flex-wrap justify-content-center">
                    {menuItems.map((item, index) => (
                        <MenuItem
                            item={item}
                            key={item.id}
                            button={false}
                            cardClass="bg-transparent text-white border-0 h-100 text-center"
                        />
                    ))
                    }
                </div>
            </div>
        </section>


    );
}

export default MiddleSection;