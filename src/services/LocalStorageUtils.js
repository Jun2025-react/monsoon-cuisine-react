export const getFromLocalStorage = (key) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
}

export const setToLocalStorage = (key, value) => {
    if (value === undefined || value === null) {
        localStorage.removeItem(key);
    } else {
        localStorage.setItem(key, JSON.stringify(value));
    }
}