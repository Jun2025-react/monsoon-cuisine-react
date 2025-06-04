import React, { createContext, useContext, useState } from 'react';

const PresentOptionContext = createContext();

export const usePresentOption = () => useContext(PresentOptionContext);

export const PresentOptionProvider = ({ children }) => {
    const [selectedOptions, setSelectedOptions] = useState({
        addons: [],     //multiple
        options: [],  //single
        addonPrice: 0,
        optionPrice: 0,
    });

    const updateSelectedOptions = (type, item) => {
        if (!["addons", "options"].includes(type)) {
            console.error("Invalid type provided. Expected 'addons' or 'options'.");
            return;
        }
        setSelectedOptions((prev) => {
            if (type === "addons") {
                // Toggle addon selection
                const exists = prev.addons.some(addon => addon.id === item.id);
                if (exists) {
                    return prev;
                } else {
                    return { ...prev, addons: [...prev.addons, item], addonPrice: (prev.addonPrice||0) + Number(item.price) };
                };
            } else if (type === "options") {
                // Only one option can be selected
                return {
                    ...prev,
                    options: [item],
                    optionPrice: Number(item.price) ,
                };
            }
            return prev;
        });
    };

    const removeAddonItem = (item) => {
        setSelectedOptions((prev) => ({
            ...prev,
            addons: prev.addons.filter(addon => addon.id !== item.id),
            addonPrice: prev.addonPrice - Number(item.price),
        }));
    };
    const removeAll = () => {
        setSelectedOptions({
            addons: [],
            options: null,
            addonPrice: 0,
            optionPrice: 0,
        });
    }

    const getAdditionalPrice = () => {
        return selectedOptions.addonPrice + selectedOptions.optionPrice;
    }

    return (
        <PresentOptionContext.Provider value={{ selectedOptions, updateSelectedOptions, removeAddonItem, removeAll, getAdditionalPrice }}>
            {children}
        </PresentOptionContext.Provider>
    );
};