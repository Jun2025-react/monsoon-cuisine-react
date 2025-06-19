import CONFIG from "../config";

const API_URL = CONFIG.API_URL;
const API_VERSION = CONFIG.API_VERSION;

const headers = {
    'Content-Type': 'application/json',
};

export const getDataFromAPI = async (endpoint, params = {}) => {
    const query = new URLSearchParams(params).toString();
    const url = `${API_URL}/${API_VERSION}/${endpoint}?${query}`;
    
    const requestOptions = {
        method : 'GET',
        credentials: 'include',
        headers,
    };

    try {
        const response = await fetch(url, requestOptions);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export const putDataFromAPI = async (endpoint, body) => {
    const url = `${API_URL}/${API_VERSION}/${endpoint}`;

    const requestOptions = {
        method: 'PUT',
        headers,
        credentials: 'include',
        body: JSON.stringify(body),
    };

    try {
        const response = await fetch(url, requestOptions);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error updating data:', error);
        throw error;
    }
}

export const postDataFromAPI = async (endpoint, body) => {
    const url = `${API_URL}/${API_VERSION}/${endpoint}`;

    const requestOptions = {
        method: 'POST',
        credentials: 'include',
        headers,
        body: JSON.stringify(body),
    };

    try {
        const response = await fetch(url, requestOptions);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
}

// const deleteDataFromAPI = async (endpoint, body = null) => {
//     const url = `${API_URL}/${API_VERSION}/${endpoint}`;

//     const requestOptions = {
//         credentials: 'include',
//         method: 'DELETE',
//         headers,
//     };

//     if (body) {
//         requestOptions.body = JSON.stringify(body);
//     }

//     try {
//         const response = await fetch(url, requestOptions);
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return await response.json();
//     } catch (error) {
//         console.error('Error deleting data:', error);
//         throw error;
//     }
// }