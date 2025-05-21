import React, { createContext, useContext, useState } from 'react';

const OptionContext = createContext();

export const useOption = () => useContext(OptionContext);

export const PresentOptionContext = ({ children }) => {
    const [selectedOptions, setSelectedOptions] = useState({});

    const updateSelectedOpotions = (type, item) => {
        if (type != "addons" && type != "options") {
            console.error("Invalid type provided. Expected 'addons' or 'options'.");
            return;
        }
        
        if (type === "addons") {
            setSelectedOptions((prev) => ({
                ...prev,
                [type]: item,
            }));   
        } 
        if (type === "options") {
            setSelectedOptions((prev) => ({
                ...prev,
                [type]: item,
            }));
        }

        setSelectedOptions((prev) => ({
            ...prev,
            [type]: {
                [item.id]: { ...prev[type][item.id], checked: !prev[type][item.id]?.checked || false }
            }
        }));
        setOptionValues((prev) => ({ ...prev, [key]: value }));
    };

    const removeOptionValue = (key) => {
        setOptionValues((prev)=> {
            const newValues = {...prev};
            delete newValues[key];
            return newValues;
        })
    }
    return (
        <OptionContext.Provider value={{ optionValues, updateSelectedOpotions, removeOptionValue}}>
        {children}
        </OptionContext.Provider>
    );
};