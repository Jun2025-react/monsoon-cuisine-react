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
    debugger;
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
        let message = "Login failed";
        const user = userPool.find(user => {
            if (user.email !== data.email) {
                message = "User not found";
                return false;
            }
            if (user.password !== data.password) {
                message = "Invalid credentials";
                return false;
            }
            return true;
        });
        if (user === undefined) {
            return { success: false, message: message };
        }

        // Mock login logic
        let userInfo = user || {};
        if (
            userInfo &&
            userInfo.email === loginData.email &&
            userInfo.password === loginData.password
        ) {
            console.log("Mock login successful:", userInfo);
            userInfo = {
                ...userInfo,
                id: 114,
                role_id: 8,
                token: "mock-auth-token"
            };
            setToLocalStorage("authToken", "mock-auth-token");
            setToLocalStorage("userInfo", { ...userInfo });
            return { success: true, user: userInfo };
        } else {
            console.log("Mock login failed: Invalid credentials");
            setToLocalStorage("authToken", null);
            setToLocalStorage("userInfo", null);
            return { success: false, message: "Invalid credentials" };
        }
    }

    const response = await postDataFromAPI("/login", loginData);

    if (!response.status === 200 || !response.data) {
        return { success: false, message: response.message || "Login failed" };
    } else {
        setToLocalStorage("authToken", response.data.token);
        return { success: true, user: response.data || {} };
    }
    // Make sure backend returns `{ success, user }` structure
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