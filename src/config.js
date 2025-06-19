const USE_MOCK_DATA = process.env.REACT_APP_USE_MOCK === "true";
const REACT_APP_API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000";
const REACT_APP_API_VERSION = process.env.REACT_APP_API_VERSION || "v1";
const COMPANY_ID = process.env.REACT_APP_COMPANY_ID;
const CONFIG_MODE = process.env.REACT_APP_MODE || "development";

const CONFIG = {
    USE_MOCK_DATA: USE_MOCK_DATA,
    API_URL: REACT_APP_API_URL,
    API_VERSION: REACT_APP_API_VERSION,
    MODE: CONFIG_MODE,
    COMPANY_ID : COMPANY_ID,
};

export default CONFIG;