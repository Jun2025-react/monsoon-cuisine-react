import { getFromLocalStorage, setToLocalStorage } from '../services/LocalStorageUtils';
import { postDataFromAPI } from '../services/APIUtils';
import CONFIG from '../config';

const USE_MOCK_DATA = CONFIG.USE_MOCK_DATA;

export const updateProfile = async (data) => {
    if (USE_MOCK_DATA) {
        const userPool = getFromLocalStorage("userPool") || [];
        const userIndex = userPool.findIndex(user => user.email === data.email);

        if (userIndex === -1) {
            return { success: false, message: "User not found" };
        }

        // Update user data in mock storage
        userPool[userIndex] = { ...userPool[userIndex], ...data };
        setToLocalStorage("userPool", userPool);
        setToLocalStorage("userInfo", userPool[userIndex]);

        return { success: true, user: userPool[userIndex] };
    }

    return await postDataFromAPI('/customer/update_profile', data);
}

export const addCard = async (data) => {
    
    const payload = {
        ...data,
        is_default: data.is_default || 0
    };
    
    if (USE_MOCK_DATA) {
        const userCards = getFromLocalStorage("userCards") || [];
        const randomId = Math.random().toString(36).substring(2, 15);

        const newCard = {
            id: randomId,
            user_id: data.user_id,
            token: data.stripeToken,
            is_default: data.is_default || 0,
            is_expired: 0,
            card_number: data.card_number,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
        }
        setToLocalStorage("userCards", [...userCards, newCard]);
        
        return { 
            status: 200, 
            message: "Card selected successfully", 
            data: newCard
        };
    }

    return await postDataFromAPI('/customer/add_card', payload);
}

export const getCardList = async (userId) => {
    if (USE_MOCK_DATA) {
        const userCards = getFromLocalStorage("userCards") || [];

        if(userCards.length === 1 ){
            const payload = {
                card_id : userCards[0].card_id,
                user_id : userId
            }
            setDefaultCard(payload);
        }
        console.log("this is card List +== ", userCards);
        return { status: 200, data: userCards };
    }
    return await postDataFromAPI("/customer/cardlist");
}

export const setDefaultCard = async (data) => {
    if (USE_MOCK_DATA) {
        const userCards = getFromLocalStorage("userCards") || [];
        const cardList = userCards.map((card) => {
            if(card.id === data.card_id) {
                card.is_default = 1;
            }else {
                card.is_default = 0;
            }

            return card;
        })

        setToLocalStorage("userCards", cardList);

        const theCard = userCards.find((card) => card.id === data.card_id);

        return {
            status : 200,
            message : "Card selected successfully",
            data : theCard
        }
    }

    return await postDataFromAPI("/customer/defaultcard");
}

export const addAddress = async (data) => {
    if (USE_MOCK_DATA) {
        setToLocalStorage("userAddress", data);
        return { success: true, address: data };
    }

    return await postDataFromAPI('/customer/addaddress', data);
}

export const getAddress = async (data) => {
    if (USE_MOCK_DATA) {
        const address = getFromLocalStorage("userAddress");
        return { 
            status: 200, 
            data: address || {}
        }
    }
    return await postDataFromAPI('/customer/getaddress', data);
}



