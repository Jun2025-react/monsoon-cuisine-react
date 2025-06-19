import { createContext, useContext, useState, useEffect } from 'react';
import * as AuthService from '../services/AuthService';
import { getFromLocalStorage, setToLocalStorage } from '../services/LocalStorageUtils';
import CONFIG from '../config';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const isMock = CONFIG.USE_MOCK_DATA;

    useEffect(() => {
        const initialize = () => {
            if (isMock) {
                const savedUser = getFromLocalStorage("userInfo");
                if (savedUser) {
                    setUser(savedUser);
                }
            }
            setLoading(false);
        };
        initialize();
    }, []);
    
    const login = async (formData) => {
        try {
            const response = await AuthService.login(formData);
            if (!response.success) {
                return { success: false, message: response.message };
            }
            setUser(response.user);
            if (isMock) {
                setToLocalStorage("userInfo", response.user);
            }
            return { success: true };
        } catch (error) {
            return { success: false, message: error.message };
        }
    };

    const logout = () => {
        setUser(null);
        if (isMock) {
            setToLocalStorage("userInfo", null);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: !!user, // 👈 derived from user
                login,
                logout,
                loading
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};