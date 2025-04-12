import React from 'react';
import Map from '../Map';
import { RESTAURANT_INFO } from '../../constants/constants';

const BottomSection = () => {
    const CITY = RESTAURANT_INFO.address.city;
    const POSTCODE = RESTAURANT_INFO.address.postcode;
    const SUBURB = RESTAURANT_INFO.address.suburb;
    const ROAD = RESTAURANT_INFO.address.road;
    const ADDRESS_1 = `${ROAD}, ${SUBURB}`;
    const ADDRESS_2 = `${CITY} ${POSTCODE}`;

    const OPENING_HOUR_LUNCH = RESTAURANT_INFO.openingHour.lunch;
    const OPENING_HOUR_DINNER = RESTAURANT_INFO.openingHour.dinner;


    return (
        <section class="section-padding information-container">
            <div class="container-fluid px-0">
                <div class="row g-0">

                    <div class="col-md-6 p-5 d-flex align-items-center">
                        <div>
                            <h6 class="text-uppercase fw-bold text-danger mb-3">Visit Us</h6>
                            <h2 class="display-6 mb-5">Restaurant Information</h2>
                            <h4 class="text-danger">Address</h4>
                            <p>{ADDRESS_1}<br/>{ADDRESS_2}</p>

                            <h4 class="text-danger mt-4">Opening Hours</h4>
                            <p>Lunch – {OPENING_HOUR_LUNCH}
                                <br/>
                                Dinner – {OPENING_HOUR_DINNER}</p>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <Map/>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default BottomSection;