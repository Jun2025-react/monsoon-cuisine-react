import React from 'react';
import { RESTAURANT_INFO, INFO_SECTION, INFO_SECTION_IMAGE } from '../../constants/constants';
import style from './InfoSection.module.css';
import Map from '../Map';

const InfoSection = () => {

    return (
        <section className="section-padding">
            <div className={`container-fluid information-container ${style.container}`}>
                {/* Row 1 */}
                <div className="row mb-4">
                    <div className="col-md-6 mb-4 mb-md-0">
                        {/* Restaurant Image */}
                        <img src={INFO_SECTION_IMAGE} alt="Monsoon Browns Bay"
                            className={`${style.image} img-fluid rounded`} />

                    </div>
                    {/* About Us */}
                    <div className="col-md-6 d-fle flex-column justify-content-center">
                        <div className={`${style.textBox}`}>
                            <h1 className="mb-3">About Us</h1>
                            <h2 className="text-danger mb-3">{INFO_SECTION.title}</h2>
                            <p>{INFO_SECTION.paragraph}</p>
                        </div>
                    </div>
                </div>
                {/* Row 2 */}
                <div className="row">
                    <div className="col-md-6 d-flex flex-column justify-conetnt-center">
                        <div className={style.textBox}>
                            <h1 className="mb-3">Information</h1>
                            <h4 className="text-danger">Address</h4>
                            <p>{RESTAURANT_INFO.address.full}</p>
                            <h4 className="text-danger">Opening Hours</h4>
                            <p>
                                Lunch - {RESTAURANT_INFO.openingHour.lunch}<br />
                                Lunch - {RESTAURANT_INFO.openingHour.dinner}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <Map/>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default InfoSection;