import { postDataFromAPI } from "./APIUtils";
import { isAndroid, isIOS } from 'react-device-detect';
import { getFromLocalStorage, setToLocalStorage } from "./LocalStorageUtils";
const company_id = process.env.COMPANY_ID || 24;
const REACT_APP_USE_MOCK = process.env.REACT_APP_USE_MOCK === "true";

const device_type = isAndroid ? "Android" : isIOS ? "IOS" : "Web";

export const register = async (data) => {
    data = {
        ...data,
        device_type: device_type,
        company_id: company_id,
    }
    if(REACT_APP_USE_MOCK) {
        const lsData = JSON.stringify({ email: data.email, password: data.password })
        setToLocalStorage("userInfo", lsData);
        return ;
    }
    return await postDataFromAPI('/signup', data);
};

export const login = async (data) => {
    data = {
        ...data,
        device_type: device_type,
        login_with: "email"
    }
    console.log("REACT_APP_USE_MOCK : ", REACT_APP_USE_MOCK);
    if(REACT_APP_USE_MOCK) {
        const userInfo = getFromLocalStorage("userInfo");
        console.log("(userInfo.email === data.email :: ", userInfo.email === data.email);
        console.log("userInfo.password === data.password :: ", userInfo.password === data.password);
        console.log("result :: ", userInfo.email === data.email && userInfo.password === data.password);
        return userInfo.email === data.email && userInfo.password === data.password
    }

    return await postDataFromAPI("/login", data)
}