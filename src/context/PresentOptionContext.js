import React, { createContext, useContext, useState } from 'react';

const PresentOptionContext = createContext();

export const usePresentOption = () => useContext(PresentOptionContext);

export const PresentOptionProvider = ({ children }) => {
    const [selectedOptions, setSelectedOptions] = useState({
        addons: [],
        options: null,
    });

    const updateSelectedOptions = (type, item) => {
        if (!["addons", "options"].includes(type)) {
            console.error("Invalid type provided. Expected 'addons' or 'options'.");
            return;
        }
        console.log("update sel options: ", item);
        setSelectedOptions((prev) => {
            if (type === "addons") {
                // Toggle addon selection
                const exists = prev.addons.some(addon => addon.id === item.id);
                if (!exists) {
                    return {
                        ...prev,
                        addons: [...prev.addons, item]
                    };
                } else {

                    return { ...prev, addons: prev.addons }
                };
            } else if (type === "options") {
                // Only one option can be selected
                return {
                    ...prev,
                    options: item,
                };
            }
            return prev;
        });
    };

    const removeAddonItem = (item) => {
        setSelectedOptions((prev) => ({
            ...prev.addons,
            addons: prev.addons.filter(addon => addon.id !== item.id),
        }));
    };

    return (
        <PresentOptionContext.Provider value={{ selectedOptions, updateSelectedOptions, removeAddonItem }}>
            {children}
        </PresentOptionContext.Provider>
    );
};