import React from 'react';
import styles from './HorizontalNavBar.module.css';

class HorizontalNavBar extends React.Component {

    constructor(props) {
        super(props);
        this.scrollRef = React.createRef();
        this.state = {
            currentCategory: props.currentCategory || 0,
            categories : props.items,
        };
        this.onClickArrow = this.onClickArrow.bind(this);
    }

    onClickArrow = (direction) => {
        const { current } = this.scrollRef;
        if (!current) return;
        const scrollAmount = 200;
        current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    };

    render() {

        return (
            <div className="position-relative d-flex align-items-center mb-4" style={{ width: '100%' }}>
                <button className={`${styles.scrollArrowBtn} me-2`} onClick={() => this.onClickArrow('left')} aria-label="Scroll Left">
                    <i className="fas fa-chevron-left"></i>
                </button>

                <div
                    className={`${styles.scrollMenu} scroll-menu d-flex overflow-auto flex-nowrap w-100 justify-content-start px-2`}
                    ref={this.scrollRef}
                    style={{ scrollBehavior: 'smooth' }}
                >
                    {this.state.categories.map(({ name, id }) => (
                        <button
                            key={id}
                            className={`${styles.tabBtn} mx-2 ${this.state.currentCategory === id ? styles.activeBtn : ''}`}
                            onClick={() => {
                                this.props.onClickCategory (id)
                                this.setState({ currentCategory: id });
                            }}>
                            {name}
                        </button>
                    ))}
                </div>

                <button className={`${styles.scrollArrowBtn} ms-2`} onClick={() => this.onClickArrow('right')} aria-label="Scroll Right">
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
        );
    }
};

export default HorizontalNavBar;
