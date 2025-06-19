import { getFromLocalStorage, setToLocalStorage } from "./LocalStorageUtils";
import { getDataFromAPI, postDataFromAPI, putDataFromAPI } from "./APIUtils";
import ENDPOINT_MAP from "./EndpointMap";
import MOCK_DATA_MAP from "../constants/MockDataMap";
import CONFIG from "../config";

const USE_MOCK_DATA = CONFIG.USE_MOCK_DATA;

export const getData = (endpoint, body = null) => {

    console.log(`Fetching data from endpoint: ${endpoint}`, body);
    
    if (USE_MOCK_DATA) {
        const localStorageKey = ENDPOINT_MAP[endpoint] || "";
        const localStorageData = getFromLocalStorage(localStorageKey);
        if (localStorageData) {
            return localStorageData;
        }
        return MOCK_DATA_MAP[localStorageKey];
    }
    
    const data = getDataFromAPI(endpoint, body);
    return data;
}

export const postData = (endpoint, body) => {
    if (USE_MOCK_DATA) {
        const localStorageKey = ENDPOINT_MAP[endpoint] || "";
        setToLocalStorage(localStorageKey, body);
        return null;
    }

    return postDataFromAPI(endpoint, body);
}

export const putData = (endpoint, body) => {
    if (USE_MOCK_DATA) {
        const localStorageKey = ENDPOINT_MAP[endpoint] || "";
        setToLocalStorage(localStorageKey, body);
        return null;
    }

    return putDataFromAPI(endpoint, body);
}
