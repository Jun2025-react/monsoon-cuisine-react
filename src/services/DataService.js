import { getFromLocalStorage, setToLocalStorage } from "./LocalStorageUtils";
import { getDataFromAPI, postDataFromAPI, putDataFromAPI } from "./APIUtils";
import ENDPOINT_MAP from "./Endpoints";

const USE_LOCAL_STORAGE = import.meta.env.REACT_APP_USE_LOCAL === "true";

export const getData = async (endpoint, body = null) => {
    if (USE_LOCAL_STORAGE) {
        const localStorageKey = ENDPOINT_MAP[endpoint] || "";
        const localStorageData = getFromLocalStorage(localStorageKey);
        if (localStorageData) {
            return localStorageData;
        }
    }

    const data = await getDataFromAPI(endpoint, body);
    
    if (USE_LOCAL_STORAGE) {
        setToLocalStorage(endpoint, data);
    }

    return data;
}

export const postData = async (endpoint, body) => {
    if (USE_LOCAL_STORAGE) {
        const localStorageKey = ENDPOINT_MAP[endpoint] || "";
        setToLocalStorage(localStorageKey, body);
    }

    return await postDataFromAPI(endpoint, body);
}

export const putData = async (endpoint, body) => {
    if (USE_LOCAL_STORAGE) {
        const localStorageKey = ENDPOINT_MAP[endpoint] || "";
        setToLocalStorage(localStorageKey, body);
    }

    return await putDataFromAPI(endpoint, body);
}
