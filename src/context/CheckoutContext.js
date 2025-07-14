import { createContext, useContext, useState } from 'react';

const CheckoutContext = createContext();

export const useCheckout = () => useContext(CheckoutContext);

export const CheckoutProvider = ({ children }) => {
    
    const [ method , setMethod ] = useState(null);
    const [ checkoutDay , setCheckoutDay ] = useState();
    const [ checkoutTime , setCheckoutTime ] = useState();
    const [ instruction, setInstruction ] = useState();

    const setOrderType = (orderType) => {
        setMethod(orderType);
    }
    const setScheduleDay = (day)=> {
        setCheckoutDay(day);
    }
    const setScheduleTime = (time) => {
        setCheckoutTime(time);
    }
    const setDeliveryInstruction = (ins)=> {
        setInstruction(ins)
    }

    return (
        <CheckoutContext.Provider
            value={{
                method, 
                checkoutDay, 
                checkoutTime,
                instruction,
                setInstruction,
                setDeliveryInstruction,
                setOrderType,
                setScheduleDay, 
                setScheduleTime
            }}
        >
            {children}
        </CheckoutContext.Provider>
    )
}