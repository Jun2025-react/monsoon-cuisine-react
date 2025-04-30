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
            options: [
                {
                    title: "Choice 1",
                    type: "radio",
                    items: [
                        { id: 1, name: "Choice 1" },
                        { id: 2, name: "Choice 2" },
                        { id: 3, name: "Choice 3" },
                    ],
                    required: true,
                    order: 1,
                },
                {
                    title: "Choice 2",
                    type: "radio",
                    items: [
                        { id: 4, name: "Choice 4" },
                        { id: 5, name: "Choice 5" },
                        { id: 6, name: "Choice 6" },
                    ],
                    required: false,
                    order: 2,
                },

            ],
        },
        {
            id: 2,
            name: "Item Name 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo",
            price: 18,
            image_path: "assets/images/biryanis-removebg-preview.png",
            options: [
                {
                    title: "Choice 1",
                    type: "radio",
                    items: [
                        { id: 1, name: "Choice 1" },
                        { id: 2, name: "Choice 2" },
                        { id: 3, name: "Choice 3" },
                    ],
                    required: true,
                    order: 1,
                },
                {
                    title: "Choice 2",
                    type: "radio",
                    items: [
                        { id: 4, name: "Choice 4" },
                        { id: 5, name: "Choice 5" },
                        { id: 6, name: "Choice 6" },
                    ],
                    required: false,
                    order: 2,
                },

            ],
        },
        {
            id: 3,
            name: "Item Name 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo",
            price: 18,
            image_path: "assets/images/meat-samosa-removebg-preview.png",
            options: [
                {
                    title: "Choice 1",
                    type: "radio",
                    items: [
                        { id: 1, name: "Choice 1" },
                        { id: 2, name: "Choice 2" },
                        { id: 3, name: "Choice 3" },
                    ],
                    required: true,
                    order: 1,
                },
                {
                    title: "Choice 2",
                    type: "radio",
                    items: [
                        { id: 4, name: "Choice 4" },
                        { id: 5, name: "Choice 5" },
                        { id: 6, name: "Choice 6" },
                    ],
                    required: false,
                    order: 2,
                },

            ],
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