import { postDataFromAPI } from "./APIUtils";
import { isAndroid, isIOS } from 'react-device-detect';
import { getFromLocalStorage, setToLocalStorage } from "./LocalStorageUtils";
import CONFIG from "../config";

const COMPANY_ID = CONFIG.COMPANY_ID;
const USE_MOCK_DATA = CONFIG.USE_MOCK_DATA;

const device_type = isAndroid ? "Android" : isIOS ? "IOS" : "Web";

export const register = async (data) => {
    data = {
        ...data,
        device_type,
        company_id: COMPANY_ID,
        mobile: Number(`64${data.mobile}`),
    };

    if (USE_MOCK_DATA) {
        const userPool = getFromLocalStorage("userPool") || [];
        const findUser = userPool.find(user => {
            return user.email === data.email
        });
        if (findUser) {
            return { success: false, message: "User already exists" };
        }
        userPool.push(data);
        setToLocalStorage("userPool", userPool);

        return { success: true };
    }

    return await postDataFromAPI('/signup', data);
};

export const login = async (data) => {
    const loginData = {
        ...data,
        device_type,
        login_with: "email"
    };

    if (USE_MOCK_DATA) {
        const userPool = getFromLocalStorage("userPool") || [];
        const user = userPool.find(user => user.email === data.email && user.password === data.password);
        debugger;
        if (user === undefined) {
            return { success: false, message: "User not found" };
        }
        debugger;

        // Mock login logic
        const userInfo = user || {};
        if (
            userInfo &&
            userInfo.email === loginData.email &&
            userInfo.password === loginData.password
        ) {

            console.log("Mock login successful:", userInfo);
            debugger;

            setToLocalStorage("userInfo", { ...userInfo });
            return { success: true, user: userInfo };
        } else {
            console.log("Mock login failed: Invalid credentials");
            debugger;

            setToLocalStorage("userInfo", null);
            return { success: false, message: "Invalid credentials" };
        }
    }

    const response = await postDataFromAPI("/login", loginData);
    // Make sure backend returns `{ success, user }` structure
    return response;
};

export const logout = async () => {

    if (USE_MOCK_DATA) {
        setToLocalStorage("userInfo", null);
    }
    else {
        await postDataFromAPI("/logout", {});
    }

    return { success: true };
};