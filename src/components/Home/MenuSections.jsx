import React from "react";
import MenuSection from "../MenuSection";

class MenuSections extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuItems: [],
        };
    }

    componentDidMount() {
        //fetch menu items from API or other source
        const MENU_ITEMS = [
            {
                id: 1,
                name: "Balti Chicken",
                description: "A spicy chicken dish cooked in a wok with spices and herbs.",
                price: "$12.99",
                image: "/assets/images/balti-chicken-removebg-preview.png"
            },
            {
                id: 2,
                name: "Biryanis",
                description: "Aromatic rice dish with spices and your choice of meat or vegetables.",
                price: "$10.99",
                image: "/assets/images/biryanis-removebg-preview.png"
            },
            {
                id: 3,
                name: "Crispy Calamari",
                description: "Fried calamari served with a tangy dipping sauce.",
                price: "$15.99",
                image: "/assets/images/crispy-calamari-removebg-preview.png"
            },
        ];
        this.setState({ menuItems: MENU_ITEMS });
    }


render() {


    const TITLE = "Out Best Menu";
    const CONTENT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo";
    const HAS_BTN = true;
    const SECTION_CLASS = "section-padding black-bg";

    return (
        <MenuSection
            title={TITLE}
            content={CONTENT}
            hasBtn={HAS_BTN}
            items={this.state.menuItems}
        />
    )
}
}

export default MenuSections;