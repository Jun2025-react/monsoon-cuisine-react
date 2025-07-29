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
    if (USE_MOCK_DATA) {
        const userPool = getFromLocalStorage("userPool") || [];
        const userIndex = userPool.findIndex(user => user.email === data.email);

        if (userIndex === -1) {
            return { success: false, message: "User not found" };
        }

        // Add card to user's card list in mock storage
        if (!userPool[userIndex].cards) {
            userPool[userIndex].cards = [];
        }
        userPool[userIndex].cards.push(data);
        setToLocalStorage("userPool", userPool);
        setToLocalStorage("userInfo", userPool[userIndex]);

        return { success: true, cards: userPool[userIndex].cards };
    }

    return await postDataFromAPI('/customer/add_card', data);
}