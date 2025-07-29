
// Information about the restaurant
// including address and opening hours
const ADDRESS = "8 Anzac Road, Browns Bay, Auckland 0630";
const ADDRESS_ROAD = "8 Anzac Road";
const ADDRESS_SUBURB = "Browns Bay";
const ADDRESS_CITY = "Auckland";
const ADDRESS_POSTCODE = "0630";

const OPENING_HOUR_LUNCH = "12:00pm-3:00pm";
const OPENING_HOUR_DINNER = "4:30pm-9:40pm";

const INFO_SECTION_TITLE = "Monsoon Indian Cuisine";
const INFO_SECTION_PARAGRAPH = "Welcome to Monsoon Indian Cuisine, your go-to destination for authentic Indian flavors in Browns Bay. We pride ourselves on delivering a unique dining experience with a wide range of delicious dishes inspired by traditional recipes and the vibrant taste of India.";


const FOOTER_PARAGRAPH = "Monsoon Indian Cuisine serves customers since 2017. We have blend the taste of Indian spices in every recipe. Just come and enjoy the food with different and unique taste. Our customers often praise our chefs"

// Images
// images for the home hero section as Static images
const HERO_IMAGE_1 = "/assets/images/balti-chicken-removebg-preview.png";
const HERO_IMAGE_2 = "/assets/images/biryanis-removebg-preview.png";
const HERO_IMAGE_3 = "/assets/images/chicken-removebg-preview.png";
const HERO_IMAGE_4 = "/assets/images/chicken-tikka-removebg-preview.png";
const HERO_IMAGE_5 = "/assets/images/crispy-calamari-removebg-preview.png";

const HERO_IMAGES_LIST = [
    { src: HERO_IMAGE_1, alt: "balti-chicken", },
    { src: HERO_IMAGE_2, alt: "biryanis", },
    { src: HERO_IMAGE_3, alt: "chicken", },
    { src: HERO_IMAGE_4, alt: "chicken-tikka", },
    { src: HERO_IMAGE_5, alt: "crispy-calamari", },
]

const INFO_SECTION_IMAGE = "/assets/images/monsoon-cuisine-picture.jpg";


// Objects
const RESTAURANT_INFO = {
    address: {
        full: ADDRESS,
        road: ADDRESS_ROAD,
        suburb: ADDRESS_SUBURB,
        city: ADDRESS_CITY,
        postcode: ADDRESS_POSTCODE
    },
    openingHour: {
        lunch: OPENING_HOUR_LUNCH,
        dinner: OPENING_HOUR_DINNER
    }
}

//InfoSection Title and Paragraph
const INFO_SECTION = {
    title: INFO_SECTION_TITLE,
    paragraph: INFO_SECTION_PARAGRAPH
}

// footer information
const FOOTER_INFO = {
    address: {
        road: ADDRESS_ROAD,
        suburb: ADDRESS_SUBURB,
        city: ADDRESS_CITY,
        postcode: ADDRESS_POSTCODE
    },
    openingHour: {
        lunch: OPENING_HOUR_LUNCH,
        dinner: OPENING_HOUR_DINNER
    },
    paragraph: FOOTER_PARAGRAPH
}

const BASE_URL = "http://localhost:8000/v1/";

const flag_au = "/assets/images/flags/australia.png";
const flag_cn = "/assets/images/flags/canada.png";
const flag_ch = "/assets/images/flags/china.png";
const flag_fj = "/assets/images/flags/fiji.png";
const flag_in = "/assets/images/flags/india.png";
const flag_nz = "/assets/images/flags/new-zealand.png";
const flag_uk = "/assets/images/flags/united-kingdom.png";
const flag_us = "/assets/images/flags/united-state.png";

const COUNTRY_FLAGS = [
    // {
    //     src: flag_au,
    //     text: "Australia",
    //     code: 61,
    //     value: 1,
    // },
    // {
    //     src: flag_cn,
    //     text: "Canada",
    //     code: 1,
    //     value:2,
    // },
    // {
    //     src: flag_ch,
    //     text: "China",
    //     code: 86,
    //     value:3,
    // },
    // {
    //     src: flag_fj,
    //     text: "Fiji",
    //     code: 679,
    //     value: 4
    // },
    // {
    //     src: flag_in,
    //     text: "India",
    //     code: 91,
    //     value: 5
    // },
    {
        src: flag_nz,
        text: "New Zealand",
        code: 64,
        value:6,
    },
    // {
    //     src: flag_uk,
    //     text: "United Kindom",
    //     code: 44,
    //     value:7,
    // },
    // {
    //     src: flag_us,
    //     text: "United State",
    //     code: 1,
    //     value:8,
    // }
]

const REGIONS_WITH_CITIES = {
  "Northland": ["Whangārei", "Kerikeri", "Kaitaia"],
  "Auckland": ["Auckland City", "Manukau", "North Shore", "Pukekohe"],
  "Waikato": ["Hamilton", "Cambridge", "Taupō", "Tokoroa"],
  "Bay of Plenty": ["Tauranga", "Rotorua", "Whakatāne", "Opotiki"],
  "Gisborne": ["Gisborne"],
  "Hawke's Bay": ["Napier", "Hastings", "Wairoa", "Havelock North"],
  "Taranaki": ["New Plymouth", "Hāwera", "Waitara", "Stratford"],
  "Manawatū-Whanganui": ["Palmerston North", "Whanganui", "Feilding", "Levin"],
  "Wellington": ["Wellington", "Lower Hutt", "Upper Hutt", "Porirua", "Kapiti"],
  "Tasman": ["Richmond", "Motueka", "Takaka"],
  "Nelson": ["Nelson"],
  "Marlborough": ["Blenheim", "Picton"],
  "West Coast": ["Greymouth", "Westport", "Hokitika"],
  "Canterbury": ["Christchurch", "Timaru", "Ashburton", "Rangiora"],
  "Otago": ["Dunedin", "Queenstown", "Oamaru", "Wanaka"],
  "Southland": ["Invercargill", "Gore", "Te Anau"]
};

export { 
    RESTAURANT_INFO, 
    INFO_SECTION, 
    FOOTER_INFO, 
    HERO_IMAGES_LIST, 
    INFO_SECTION_IMAGE, 
    BASE_URL, 
    COUNTRY_FLAGS,
    REGIONS_WITH_CITIES
}
