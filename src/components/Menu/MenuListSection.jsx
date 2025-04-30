import React from 'react';
import MenuItem from '../MenuItem';
import HorizontalNavBar from './HorizontalNavBar';
import { OptionProvider } from '../../context/OptionContext';
import MOCK_DATA, { OLD_MENU_LIST } from '../../constants/data';

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
        const FETCH_DATA = MOCK_DATA;
        let show_item_list = [];

        // Create Category lists
        let CATEGORIES = FETCH_DATA.map(item => item.category);
        CATEGORIES.unshift({ id: 0, name: "ALL" });

        // For All in categories
        FETCH_DATA.forEach(category => {
            show_item_list = [...show_item_list, ...category.items];
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
                                    <OptionProvider key={index}>
                                        <MenuItem
                                            item={item}
                                            key={item.id}
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