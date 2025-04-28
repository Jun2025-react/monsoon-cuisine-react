import React from 'react';
import MenuItem from '../MenuItem';
import HorizontalNavBar from './HorizontalNavBar';
import { OptionProvider } from '../../context/OptionContext';

class MenuListSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentCategory: 0,
            categories: [],
            menuItems: [],
        };
    }

    componentDidMount() {
        const MENU_LISTS = [
            {
                name: "Item Name 1",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo",
                price: 18,
                image: "assets/images/chicken-removebg-preview.png",
                category :1,
                options: [
                    {
                        title: "Choice 1",
                        type: "radio",
                        items: [
                            { id: 1, name: "Choice 1" },
                            { id: 2, name: "Choice 2" },
                            { id: 3, name: "Choice 3" },
                        ],
                        message: "",
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
                        message: "",
                        required: false,
                        order: 2,
                    },
                    {
                        title: "Special Request",
                        type: "textarea",
                        items: [],
                        required: false,
                        message: "",
                        order: 3,
                    },
                ],
            },
            {
                name: "Item Name 2",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo",
                category :2,
                price: 18,
                image: "assets/images/biryanis-removebg-preview.png",
                options: [
                    {
                        title: "Choice 1",
                        type: "radio",
                        items: [
                            { id: 1, name: "Choice 1" },
                            { id: 2, name: "Choice 2" },
                            { id: 3, name: "Choice 3" },
                        ],
                        message: "",
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
                        message: "",
                        required: false,
                        order: 2,
                    },
                    {
                        title: "Special Request",
                        type: "textarea",
                        items: [],
                        required: false,
                        message: "",
                        order: 3,
                    },
                ],
            },
            {
                name: "Item Name 3",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo",
                price: 18,
                category :3,
                image: "assets/images/meat-samosa-removebg-preview.png",
                options: [
                    {
                        title: "Choice 1",
                        type: "radio",
                        items: [
                            { id: 1, name: "Choice 1" },
                            { id: 2, name: "Choice 2" },
                            { id: 3, name: "Choice 3" },
                        ],
                        message: "",
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
                        message: "",
                        required: false,
                        order: 2,
                    },
                    {
                        title: "Special Request",
                        type: "textarea",
                        items: [],
                        required: false,
                        message: "",
                        order: 3,
                    },
                ],
            },
        ];
        // Fetch menu items from an API or any other source
        // For now, we will use the static data defined below
        // const demo_list = [...MENU_LISTS, ...MENU_LISTS, ...MENU_LISTS, ...MENU_LISTS, ...MENU_LISTS, ...MENU_LISTS];

        this.setState({
            menuItems: MENU_LISTS,
        });


    }

    onClickHorizontalNavBar = (id) => {
        this.setState({ currentCategory: id });
    }


    render() {

        return (
            <section className="menu-list-section py-5 bg-light">
                <div className="container">

                    {/* <!-- Horizontal Scrollable Tab Menu --> */}
                    <HorizontalNavBar
                        currentCategory={this.state.currentCategory}
                        onClickCategory={this.onClickHorizontalNavBar}
                    />

                    <div className="d-flex flex-wrap justify-content-center">
                        {
                            this.state.menuItems
                                .filter(item => item.category === this.state.currentCategory || this.state.currentCategory === 0)
                                .map((item, index) => (
                                    <OptionProvider key={index}>
                                        <MenuItem
                                            index={index}
                                            item={item}
                                            button={true}
                                            
                                            cardClass=""
                                        />
                                    </OptionProvider>
                                ))
                        }
                    </div>

                </div>
            </section>

        )
    }
}

export default MenuListSection;