import React from 'react';
import MenuItem from '../MenuItem';
import HorizontalNavBar from './HorizontalNavBar';
import MOCK_DATA_2 from '../../constants/mock_menu_data';
import { getData } from '../../services/DataService';


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
        const result = getData("/menu/categories");
        console.log("Response from getData:", result);
        const FETCH_DATA = MOCK_DATA_2.data;
        let show_item_list = [];

        // Create Category lists
        let CATEGORIES = FETCH_DATA.map(item => item.menu_category);
        CATEGORIES.unshift({ id: 0, name: "ALL" });

        // For All in categories
        FETCH_DATA.forEach(category => {
            const menu_category = category.menu_category;
            const category_id = menu_category.id;

            let menu_items = category.items.map(item => {
                item.menu_category_id = category_id;
                return item;
            });

            show_item_list = [...show_item_list, ...menu_items];
        });

        this.setState({
            categories: CATEGORIES,
            menuItems: show_item_list,
        });
    }

    onClickHorizontalNavBar = (id) => {
        this.setState({ currentCategory: id });
    }

    render() {

        return (
            <section className="menu-list-section py-5 bg-light">
                <div className="container">

                    {this.state.categories.length === 0 ? (
                        <div>Loading...</div>
                    ) : (
                        <HorizontalNavBar
                            items={this.state.categories}
                            currentCategory={this.state.currentCategory}
                            onClickCategory={this.onClickHorizontalNavBar}
                        />
                    )}

                    <div className="d-flex flex-wrap justify-content-center">
                        {
                            this.state.menuItems
                                .filter(item => item.menu_category_id === this.state.currentCategory || this.state.currentCategory === 0)
                                .map((item, index) => (
                                    <MenuItem
                                        item={item}
                                        key={item.id}
                                        button={true}
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