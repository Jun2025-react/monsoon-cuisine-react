import React from 'react';
import {INFO_SECTION_IMAGE} from '../../constants/constants'
import styles from './MiddleSection.module.css';

const MiddleSection = () => {
    console.log("styles: ", styles);
    const TITLE = "About Monsoon";
    const SUBTITLE_1 = "Experience the Authentic";
    const SUBTITLE_2 = "Taste of India";
    const DESCRIPTION_1 = "Monsoon Indian Cuisine has been delighting customers with authentic flavors since 2017. Our chefs bring 15+ years of experience to every dish, blending Indian spices for a unique taste. ";
    const DESCRIPTION_2 = "Enjoy a peaceful dining experience with a sea view, or take advantage of our quick and easy online ordering system. We offer a variety of lunch specials, fully licensed dining, and BYO wine options.";
    const DESCRIPTION_3 = "We offer a variety of lunch specials, fully licensed dining, and BYO wine options.";
    
    return (
        <section className={`${styles['black-bg-margin']} bg-dark`}>
            <div className="container-fluid px-0">
                <div className="row g-0 h-100">

                    <div className="col-md-6 ">
                        <img src={INFO_SECTION_IMAGE} alt="Monsoon Exterior"
                            className="img-fluid h-100 w-100" />
                    </div>

                    <div className="col-md-6 d-flex align-items-center bg-dark text-white p-5">
                        <div>
                            <h6 className="text-danger fw-bold">{TITLE}</h6>
                            <h2 className="fw-bold display-6 mb-4">{SUBTITLE_1}<br/>{SUBTITLE_2}</h2>
                            <p>{DESCRIPTION_1}</p>
                            <p>{DESCRIPTION_2}</p>
                            <p>{DESCRIPTION_3}</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default MiddleSection