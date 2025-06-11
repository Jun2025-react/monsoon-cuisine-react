import { getFromLocalStorage, setToLocalStorage } from "./LocalStorageUtils";
import { getDataFromAPI, postDataFromAPI, putDataFromAPI } from "./APIUtils";
import ENDPOINT_MAP from "./EndpointMap";
import MOCK_DATA_MAP from "../constants/MockDataMap";

const USE_MOCK_DATA = process.env.REACT_APP_USE_MOCK === "true";

export const getData = (endpoint, body = null) => {

    console.log(`Fetching data from endpoint: ${endpoint}`, body);
    
    if (USE_MOCK_DATA) {
        const localStorageKey = ENDPOINT_MAP[endpoint] || "";
        const localStorageData = getFromLocalStorage(localStorageKey);
        // console.log("here :: ", localStorageData);
        if (localStorageData) {
            return localStorageData;
        }
        // If no mock data is found from local storage, show mock data
        // console.log(`here is data ${localStorageKey}`)
        // console.log(`MOCK_DATA_MAP[${localStorageKey}]: `, MOCK_DATA_MAP[localStorageKey]);
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
