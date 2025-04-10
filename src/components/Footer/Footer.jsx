import React from 'react';
import { FOOTER_INFO } from '../../constants/constants';
import style from './Footer.module.css';

const Footer = () => {
    
    return (
        <footer className={`bg-dark text-light footer-padding ${style.footerPadding}`}>
            <div className="container">
                <div className="row text-center text-md-start">
                    <div className="col-md-4 mb-4 mb-md-0">
                        <h5 className="text-warning mb-3">Address</h5>
                        <p className="mb-0">{FOOTER_INFO.address.road},<br />
                            {FOOTER_INFO.address.suburb}<br />
                            {FOOTER_INFO.address.city} {FOOTER_INFO.address.postcode}</p>
                    </div>

                    <div className="col-md-4 mb-4 mb-md-0">
                        <h5 className="text-warning mb-3">Opening Hours</h5>
                        <p className="mb-0">
                            Lunch - {FOOTER_INFO.openingHour.lunch}<br />
                            Dinner - {FOOTER_INFO.openingHour.dinner}
                        </p>
                    </div>

                    <div className="col-md-4">
                        <h5 className="text-warning mb-3">About Monsoon</h5>
                        <p>{FOOTER_INFO.paragraph}</p>
                    </div>
                </div>
            </div>
        </footer>
    )

}

export default Footer;