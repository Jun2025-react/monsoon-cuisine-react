import CONFIG from "../config";
import { postDataFromAPI } from "./APIUtils";

export const checkout = async (checkoutData) => {
    const USE_MOCK_DATA = CONFIG.USE_MOCK_DATA;

    if (USE_MOCK_DATA) {
        return { status: true, message: "Checkout successful with mock data" };
    }

    try {
        const response = await postDataFromAPI("/checkout", checkoutData);
        return response;
    } catch (error) {
        console.error("Error during checkout:", error);
        return { status: false, message: "Checkout failed" };
    }
}