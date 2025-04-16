import React from "react";
import MenuItem from "./MenuItem"

const MenuSection = ({ title, content, hasBtn, items, sectionClass }) => {

    const SECTION_CLASS = !!sectionClass ? sectionClass : "section-padding black-bg";

    return (

        <section className={SECTION_CLASS} style={{ backgroundColor: "#1a150a", color: "#fff" }}>
            <div className="container text-center">
                {/* Section Title */}
                <div className="pb-4">
                    <h2 className="text-danger fw-bold mb-3">{title}</h2>
                    <p className="mb-4">{content}</p>
                    {/* View more btn */}
                    {!!hasBtn && <div className="mb-5">
                        <button className="btn btn-outline-light px-4 py-2" >View More</button>
                    </div>}
                </div>
                {/* Menu Items */}
                <div className="row g-4 pt-5">
                    {
                        items.map(item => (
                            <MenuItem
                                key={item.id}
                                item={item}
                                button={false}
                                cardClass="bg-transparent text-white border-0 h-100"
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
};

export default MenuSection;