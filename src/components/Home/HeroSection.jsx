import React from 'react';
import styles from './HeroSection.module.css';
import { HERO_IMAGES_LIST } from '../../constants/constants';


class HeroSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImageIndex: 0,
            currentImage: HERO_IMAGES_LIST[0],
            isFading: false,
        };

    }

    componentDidMount() {
        this.imageChangeInterval = setInterval(this.onImageChange, 5000);
    }
    componentWillUnmount() {
        clearInterval(this.imageChangeInterval);
    }

    onImageChange = () => {
        this.setState({ isFading: true });

        setTimeout(() => {
            console.log("is it working?")
            const nextIndex = (this.state.currentImageIndex + 1) % HERO_IMAGES_LIST.length;
            this.setState({
                currentImageIndex: nextIndex,
                currentImage: HERO_IMAGES_LIST[nextIndex],
                isFading: false,
            });
        }, 500); // fade duration
    }


    render() {

        const TITLE_1 = "THE UNIQUE";
        const TITLE_2 = "TASTE OF INDIA";
        const PARAGRAPH = "Experience the rich and authentic flavors of India, crafted with the finest spices and freshest ingredients—dine in with a stunning sea view or order online for a quick and delicious takeaway!";

        return (
            <section className="section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <h1 className="display-4 fw-bold text-danger">
                                {TITLE_1}<br />
                                {TITLE_2}
                            </h1>
                            <p className="lead mt-4">
                                {PARAGRAPH}
                            </p>
                        </div>

                        <div className="col-md-6 text-center">
                            <img
                                src={this.state.currentImage.src}
                                alt={this.state.currentImage.alt}
                                className={`${this.state.isFading ? styles.hidden : styles.show}`}
                            />
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

export default HeroSection;