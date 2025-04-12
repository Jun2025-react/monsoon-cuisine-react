import React from 'react';
import styles from './TopSection.module.css';
import FloatingImage from '../FloatingImage';
import { HERO_IMAGES_LIST } from '../../constants/constants';

class TopSection extends React.Component {

    constructor(props) {
        super(props);
        const defaultNo = 3;
        this.state = {
            currentImageIndex: defaultNo,
            currentImage: HERO_IMAGES_LIST[defaultNo],
            isFading: false,
        };
    }


    render() {
        const TITLE = "Why Monsoon";
        const SUBTITLE = "Just as the monsoon refreshes the earth";
        const DESCRIPTION = "Monsoon Indian Cuisine brings a refreshing twist to traditional Indian dining. Our dishes are crafted with passion, using fresh ingredients and aromatic spices that awaken your senses—providing warmth, comfort, and flavor in every bite.";

        return (
            <section className="section-padding">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
                            <h5 className={`fw-bold title ${styles.title}`}>{TITLE}</h5>
                            <h1 className={`mb-4 ${styles.subTitle}`} >
                                {SUBTITLE}
                            </h1>
                            <p>
                                {DESCRIPTION}
                            </p>
                        </div>

                        <div className="col-md-6 text-center">
                            <FloatingImage
                                src={this.state.currentImage.src}
                                alt={this.state.currentImage.alt}
                                isFading={this.state.isFading}
                            />
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default TopSection;