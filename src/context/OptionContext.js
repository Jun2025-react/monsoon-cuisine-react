import React, { createContext, useContext, useState } from 'react';

const OptionContext = createContext();

export const useOption = () => useContext(OptionContext);

export const OptionProvider = ({ children }) => {
    const [optionValues, setOptionValues] = useState({});

    const updateOptionValue = (key, value) => {
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
        <OptionContext.Provider value={{ optionValues, updateOptionValue, removeOptionValue}}>
        {children}
        </OptionContext.Provider>
    );
};