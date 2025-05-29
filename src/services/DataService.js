import { getFromLocalStorage, setToLocalStorage } from "./LocalStorageUtils";
import { getDataFromAPI, postDataFromAPI, putDataFromAPI } from "./APIUtils";
import ENDPOINT_MAP from "./EndpointMap";
import MOCK_DATA_MAP from "../constants/MockDataMap";

const USE_MOCK_DATA = process.env.REACT_APP_USE_MOCK === "true";

export const getData = (endpoint, body = null) => {
    if (USE_MOCK_DATA) {
        const localStorageKey = ENDPOINT_MAP[endpoint] || "";
        // Check if the endpoint has a corresponding mock data key
        if (localStorageKey && MOCK_DATA_MAP[localStorageKey]) {
            return MOCK_DATA_MAP[localStorageKey];
        }
        const localStorageData = getFromLocalStorage(localStorageKey);
        if (localStorageData) {
            return localStorageData;
        }
    }
    
    const data = getDataFromAPI(endpoint, body);
    return data;
}

export const postData = (endpoint, body) => {
    if (USE_MOCK_DATA) {
        const localStorageKey = ENDPOINT_MAP[endpoint] || "";
        setToLocalStorage(localStorageKey, body);
    }

    return postDataFromAPI(endpoint, body);
}

export const putData = (endpoint, body) => {
    if (USE_MOCK_DATA) {
        const localStorageKey = ENDPOINT_MAP[endpoint] || "";
        setToLocalStorage(localStorageKey, body);
    }

    return putDataFromAPI(endpoint, body);
}
