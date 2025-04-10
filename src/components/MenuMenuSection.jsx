import React from "react";
import MenuItem from "./MenuItem";
import MenuSection from "./MenuSection";

const MenuMenuSection = () => {
    const MENU_ITEMS = [
        {
            id: 1,
            name: "Butter Chicken",
            description: "Tender chicken pieces cooked in a creamy tomato sauce.",
            price: "$12.99",
            imageUrl: "path/to/image1.jpg"
        },
        {
            id: 2,
            name: "Paneer Tikka",
            description: "Grilled paneer marinated in spices and yogurt.",
            price: "$10.99",
            imageUrl: "path/to/image2.jpg"
        },
        {
            id: 3,
            name: "Biryani",
            description: "Aromatic rice dish with spices and your choice of meat or vegetables.",
            price: "$15.99",
            imageUrl: "path/to/image3.jpg"
        },
    ];

    const TITLE = "Out Best Menu";
    const CONTENT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo";
    const HAS_BTN = false;
    const SECTION_CLASS = "py-5";

    return (
        <MenuSection
            title={TITLE}
            content={CONTENT}
            hasBtn={HAS_BTN}
            items={MENU_ITEMS}
            sectionClass={SECTION_CLASS}
        />
    )
}

export default MenuMenuSection;