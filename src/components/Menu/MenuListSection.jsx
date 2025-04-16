import React from 'react';
import MenuItem from '../MenuItem';
import HorizontalNavBar from './HorizontalNavBar';

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
                category: 1,
            },
            {
                name: "Item Name 2",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo",
                price: 18,
                image: "assets/images/biryanis-removebg-preview.png",
                category: 2,

            },
            {
                name: "Item Name 3",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo",
                price: 18,
                image: "assets/images/meat-samosa-removebg-preview.png",
                category: 3,
            },
            {
                name: "Item Name 4",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo",
                price: 18,
                image: "assets/images/crispy-calamari-removebg-preview.png",
                category: 4,
            }
        ];

        // Fetch menu items from an API or any other source
        // For now, we will use the static data defined below
        const demo_list = [...MENU_LISTS, ...MENU_LISTS, ...MENU_LISTS, ...MENU_LISTS, ...MENU_LISTS, ...MENU_LISTS];

        this.setState({
            menuItems: demo_list,
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
                                    <MenuItem
                                        index={index}
                                        item={item}
                                        button={true}
                                        key={index}
                                        cardClass=""
                                    />
                                ))
                        }
                    </div>

                </div>
            </section>

        )
    }
}

export default MenuListSection;