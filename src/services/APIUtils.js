const REACT_APP_API_URL = import.meta.env.REACT_APP_API_URL || "http://localhost:3000";
const REACT_APP_API_VERSION = import.meta.env.REACT_APP_API_VERSION || "v1";

const headers = {
    'Content-Type': 'application/json',
};

export const getDataFromAPI = async (endpoint, body = null) => {
    const url = `${REACT_APP_API_URL}/${REACT_APP_API_VERSION}/${endpoint}`;

    const requestOptions = {
        method : 'GET',
        headers,
    };

    if (body) {
        requestOptions.body = JSON.stringify(body);
    }

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
    const url = `${REACT_APP_API_URL}/${REACT_APP_API_VERSION}/${endpoint}`;

    const requestOptions = {
        method: 'PUT',
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
        console.error('Error updating data:', error);
        throw error;
    }
}

export const postDataFromAPI = async (endpoint, body) => {
    const url = `${REACT_APP_API_URL}/${REACT_APP_API_VERSION}/${endpoint}`;

    const requestOptions = {
        method: 'POST',
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

const deleteDataFromAPI = async (endpoint, body = null) => {
    const url = `${REACT_APP_API_URL}/${REACT_APP_API_VERSION}/${endpoint}`;

    const requestOptions = {
        method: 'DELETE',
        headers,
    };

    if (body) {
        requestOptions.body = JSON.stringify(body);
    }

    try {
        const response = await fetch(url, requestOptions);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error deleting data:', error);
        throw error;
    }
}