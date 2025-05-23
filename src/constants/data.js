const MOCK_DATA_2 = {
    "data": [
        {
            "menu_category": {
                "id": 4,
                "name": "Main",
                "image_path": "main-menu-category.png",
                "shop_id": 3
            },
            "items": [
                {
                    "id": 66,
                    "name": "Test MeNU",
                    "price": "122.00",
                    "menu_category_id": 4,
                    "description": "Test descriptions",
                    "shop": "Cole, Carroll and Reilly Restaurant",
                    "unit_of_measurement": "pack",
                    "image_path": "assets/images/chicken-removebg-preview.png",
                    "item_addons": [],
                    "item_options": []
                }
            ]
        },
        {
            "menu_category": {
                "id": 5,
                "name": "Burger",
                "image_path": "burger-menu-category.png",
                "shop_id": 3
            },
            "items": [
                {
                    "id": 6,
                    "name": "Miso Soup",
                    "price": "5.00",
                    "menu_category_id": 5,
                    "description": "Test descriptions",
                    "shop": "Cole, Carroll and Reilly Restaurant",
                    "unit_of_measurement": "l",
                    "image_path": "assets/images/chicken-removebg-preview.png",
                    "item_addons": [],
                    "item_options": []
                },
                {
                    "id": 7,
                    "name": "Sushi",
                    "price": "0.00",
                    "menu_category_id": 5,
                    "description": "Test descriptions",
                    "shop": "Cole, Carroll and Reilly Restaurant",
                    "unit_of_measurement": "l",
                    "image_path": "assets/images/biryanis-removebg-preview.png",
                    "item_addons": [],
                    "item_options": []
                },
                {
                    "id": 8,
                    "name": "Rice",
                    "price": "3.00",
                    "menu_category_id": 5,
                    "description": "Test descriptions",
                    "shop": "Cole, Carroll and Reilly Restaurant",
                    "unit_of_measurement": "l",
                    "image_path": "assets/images/meat-samosa-removebg-preview.png",
                    "item_addons": [],
                    "item_options": []
                },
                {
                    "id": 9,
                    "name": "Pasta",
                    "price": "5.00",
                    "menu_category_id": 5,
                    "description": "Test descriptions",
                    "shop": "Cole, Carroll and Reilly Restaurant",
                    "unit_of_measurement": "l",
                    "image_path": "assets/images/chicken-removebg-preview.png",
                    "item_addons": [],
                    "item_options": []
                },
                {
                    "id": 10,
                    "name": "Pudding",
                    "price": "4.00",
                    "menu_category_id": 5,
                    "description": "Test descriptions",
                    "shop": "Cole, Carroll and Reilly Restaurant",
                    "image_path": "assets/images/chicken-removebg-preview.png",
                    "unit_of_measurement": "l",
                    "item_addons": [
                        {
                            "id": 10,
                            "label": "cardamom",
                            "name": "cardamom",
                            "price": "5.00",
                            "option_status": "Available",
                            "image_path": null,
                            "item_id": 10,
                            "created_at": "2025-05-01T22:33:42.000000Z",
                            "updated_at": null
                        },
                        {
                            "id": 11,
                            "label": "nutmeg",
                            "name": "nutmeg",
                            "price": "2.00",
                            "option_status": "Available",
                            "image_path": null,
                            "item_id": 10,
                            "created_at": "2025-05-01T22:34:42.000000Z",
                            "updated_at": null
                        }
                    ],
                    "item_options": [
                        {
                            "id": 3,
                            "name": "more sweet",
                            "price": "2.00",
                            "option_status": "Available",
                            "item_id": 10,
                            "image_path": null,
                            "created_at": "2025-05-01T22:35:30.000000Z",
                            "updated_at": null
                        },
                        {
                            "id": 4,
                            "name": "less sweet",
                            "price": "0.00",
                            "option_status": "Available",
                            "item_id": 10,
                            "image_path": null,
                            "created_at": "2025-05-01T22:36:15.000000Z",
                            "updated_at": null
                        }
                    ]
                }
            ]
        },
        {
            "menu_category": {
                "id": 6,
                "name": "Sandwich",
                "image_path": "sandwich-menu-category.png",
                "shop_id": 3
            },
            "items": []
        }
    ]
};

const MOCK_DATA = [
    {
        "category": {
            "id": 1,
            "name": "Main Courses",
            "image_path": "1111111iii-menu-category.jpg",
            "shop_id": 1,
            "created_at": "2024-08-21T11:25:23.000000Z",
            "updated_at": "2024-09-06T15:24:44.000000Z",
            "shop_category_id": null
        },
        "items": [
            {
                "id": 13,
                "shop_id": 1,
                "name": "Mozzarella Sticks",
                "description": "Mozzarella Sticks",
                "size": 11,
                "unit_of_measurement_id": 1,
                "price": "1.00",
                "item_status": "Available",
                "image_path": "assets/images/chicken-removebg-preview.png",
                "menu_category_id": 1,
                "is_veg": 1,
                "is_new_item": 1,
                "is_popular": 1,
                "created_by": null,
                "updated_by": null,
                "created_at": "2024-09-06T15:26:39.000000Z",
                "updated_at": "2024-09-06T15:26:39.000000Z",
                "deleted_at": null
            },
            {
                "id": 17,
                "shop_id": 1,
                "name": "samosa",
                "description": "good to eat",
                "size": 2,
                "unit_of_measurement_id": 1,
                "price": "5.00",
                "item_status": "Available",
                "image_path": "assets/images/biryanis-removebg-preview.png",
                "menu_category_id": 1,
                "is_veg": 0,
                "is_new_item": 0,
                "is_popular": 0,
                "created_by": null,
                "updated_by": null,
                "created_at": "2025-01-07T09:45:12.000000Z",
                "updated_at": "2025-01-07T09:45:12.000000Z",
                "deleted_at": null
            },
            {
                "id": 18,
                "shop_id": 1,
                "name": "Test-1",
                "description": "Test",
                "size": 1,
                "unit_of_measurement_id": 1,
                "price": "25.00",
                "item_status": "Available",
                "image_path": "assets/images/meat-samosa-removebg-preview.png",
                "menu_category_id": 1,
                "is_veg": 1,
                "is_new_item": 0,
                "is_popular": 0,
                "created_by": null,
                "updated_by": null,
                "created_at": "2025-01-25T06:49:06.000000Z",
                "updated_at": "2025-01-25T06:49:06.000000Z",
                "deleted_at": null
            },
            {
                "id": 20,
                "shop_id": 6,
                "name": "Tets",
                "description": "1",
                "size": 1,
                "unit_of_measurement_id": 1,
                "price": "11.00",
                "item_status": "Available",
                "image_path": "assets/images/meat-samosa-removebg-preview.png",
                "menu_category_id": 1,
                "is_veg": 0,
                "is_new_item": 1,
                "is_popular": 0,
                "created_by": null,
                "updated_by": null,
                "created_at": "2025-04-10T19:09:59.000000Z",
                "updated_at": "2025-04-10T19:09:59.000000Z",
                "deleted_at": null
            },
            {
                "id": 22,
                "shop_id": 7,
                "name": "curd",
                "description": "demo",
                "size": 2,
                "unit_of_measurement_id": 1,
                "price": "30.00",
                "item_status": "Available",
                "image_path": null,
                "menu_category_id": 1,
                "is_veg": 1,
                "is_new_item": 1,
                "is_popular": 1,
                "created_by": null,
                "updated_by": null,
                "created_at": "2025-04-18T04:18:02.000000Z",
                "updated_at": "2025-04-18T04:38:24.000000Z",
                "deleted_at": null
            }
        ]
    },
    {
        "category": {
            "id": 2,
            "name": "Appetizers",
            "image_path": "0000000-menu-category.png",
            "shop_id": 1,
            "created_at": "2024-08-21T11:49:11.000000Z",
            "updated_at": "2024-09-06T15:24:29.000000Z",
            "shop_category_id": null
        },
        "items": [
            {
                "id": 6,
                "shop_id": 2,
                "name": "Tandoori Chicken",
                "description": "Dry and Spicy",
                "size": 8,
                "unit_of_measurement_id": 1,
                "price": "14.00",
                "item_status": "Available",
                "image_path": "LdNoP3XR4rFkhlmJyz1hMLDIvw2kg47yN5P8vFtt.png",
                "menu_category_id": 2,
                "is_veg": 0,
                "is_new_item": 0,
                "is_popular": 1,
                "created_by": null,
                "updated_by": null,
                "created_at": "2024-08-28T06:02:37.000000Z",
                "updated_at": "2024-08-28T06:02:37.000000Z",
                "deleted_at": null
            },
            {
                "id": 9,
                "shop_id": 2,
                "name": "Paneer",
                "description": "Mattor PAneer",
                "size": 8,
                "unit_of_measurement_id": 1,
                "price": "15.00",
                "item_status": "Available",
                "image_path": null,
                "menu_category_id": 2,
                "is_veg": 0,
                "is_new_item": 0,
                "is_popular": 1,
                "created_by": null,
                "updated_by": null,
                "created_at": "2024-08-28T06:11:30.000000Z",
                "updated_at": "2024-08-28T06:11:30.000000Z",
                "deleted_at": null
            },
            {
                "id": 14,
                "shop_id": 1,
                "name": "Chicken Wings",
                "description": "Chicken Wings",
                "size": 1,
                "unit_of_measurement_id": 1,
                "price": "1.00",
                "item_status": "Available",
                "image_path": "R9en2Xv73mwClKXzpDJgAYbjVeQtt7uZ5U3uQ31i.png",
                "menu_category_id": 2,
                "is_veg": 0,
                "is_new_item": 1,
                "is_popular": 1,
                "created_by": null,
                "updated_by": null,
                "created_at": "2024-09-06T15:27:07.000000Z",
                "updated_at": "2024-09-06T15:27:07.000000Z",
                "deleted_at": null
            }
        ]
    },
    {
        "category": {
            "id": 3,
            "name": "Dessert",
            "image_path": null,
            "shop_id": 1,
            "created_at": "2024-09-24T16:28:05.000000Z",
            "updated_at": "2024-09-24T16:28:05.000000Z",
            "shop_category_id": null
        },
        "items": [
            {
                "id": 15,
                "shop_id": 1,
                "name": "test",
                "description": "Test by developer",
                "size": 1,
                "unit_of_measurement_id": 1,
                "price": "1.00",
                "item_status": "Unavailable",
                "image_path": "J7sUlmeEdhjawUHXq1q61SfPcG6iv2wMDh0v2vTc.jpg",
                "menu_category_id": 3,
                "is_veg": 1,
                "is_new_item": 1,
                "is_popular": 0,
                "created_by": null,
                "updated_by": null,
                "created_at": "2024-10-28T08:13:37.000000Z",
                "updated_at": "2024-10-28T08:13:37.000000Z",
                "deleted_at": null
            }
        ]
    },
    {
        "category": {
            "id": 4,
            "name": "Burgers",
            "image_path": null,
            "shop_id": 5,
            "created_at": "2024-12-09T10:34:54.000000Z",
            "updated_at": "2024-12-09T10:35:11.000000Z",
            "shop_category_id": null
        },
        "items": [
            {
                "id": 16,
                "shop_id": 5,
                "name": "Classic Cheeseburger",
                "description": "A juicy beef patty topped with cheddar cheese, lettuce, tomatoes, pickles, and a tangy sauce.",
                "size": 1,
                "unit_of_measurement_id": 1,
                "price": "12.99",
                "item_status": "Available",
                "image_path": "MUW42q3MdWdaQdy3TMgJC9kmF8RATYNadXFoG5YV.jpg",
                "menu_category_id": 4,
                "is_veg": 0,
                "is_new_item": 1,
                "is_popular": 1,
                "created_by": null,
                "updated_by": null,
                "created_at": "2024-12-09T10:30:24.000000Z",
                "updated_at": "2024-12-09T10:36:02.000000Z",
                "deleted_at": null
            },
            {
                "id": 19,
                "shop_id": 1,
                "name": "Test",
                "description": "pat thai",
                "size": 10,
                "unit_of_measurement_id": 1,
                "price": "10.00",
                "item_status": "Available",
                "image_path": null,
                "menu_category_id": 4,
                "is_veg": 1,
                "is_new_item": 1,
                "is_popular": 1,
                "created_by": null,
                "updated_by": null,
                "created_at": "2025-04-10T19:07:01.000000Z",
                "updated_at": "2025-04-10T19:07:01.000000Z",
                "deleted_at": null
            }
        ]
    }
]

export const OLD_MENU_LIST = [
    {
        name: "Item Name 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo",
        price: 18,
        image_path: "assets/images/chicken-removebg-preview.png",
        category: 1,
        options: [
            {
                title: "Choice 1",
                type: "radio",
                items: [
                    { id: 1, name: "Choice 1" },
                    { id: 2, name: "Choice 2" },
                    { id: 3, name: "Choice 3" },
                ],
                message: "",
                required: true,
                order: 1,
            },
            {
                title: "Choice 2",
                type: "radio",
                items: [
                    { id: 4, name: "Choice 4" },
                    { id: 5, name: "Choice 5" },
                    { id: 6, name: "Choice 6" },
                ],
                message: "",
                required: false,
                order: 2,
            },
            {
                title: "Special Request",
                type: "textarea",
                items: [],
                required: false,
                message: "",
                order: 3,
            },
        ],
    },
    {
        name: "Item Name 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo",
        category: 2,
        price: 18,
        image_path: "assets/images/biryanis-removebg-preview.png",
        options: [
            {
                title: "Choice 1",
                type: "radio",
                items: [
                    { id: 1, name: "Choice 1" },
                    { id: 2, name: "Choice 2" },
                    { id: 3, name: "Choice 3" },
                ],
                message: "",
                required: true,
                order: 1,
            },
            {
                title: "Choice 2",
                type: "radio",
                items: [
                    { id: 4, name: "Choice 4" },
                    { id: 5, name: "Choice 5" },
                    { id: 6, name: "Choice 6" },
                ],
                message: "",
                required: false,
                order: 2,
            },
            {
                title: "Special Request",
                type: "textarea",
                items: [],
                required: false,
                message: "",
                order: 3,
            },
        ],
    },
    {
        name: "Item Name 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo",
        price: 18,
        category: 3,
        image_path: "assets/images/meat-samosa-removebg-preview.png",
        options: [
            {
                title: "Choice 1",
                type: "radio",
                items: [
                    { id: 1, name: "Choice 1" },
                    { id: 2, name: "Choice 2" },
                    { id: 3, name: "Choice 3" },
                ],
                message: "",
                required: true,
                order: 1,
            },
            {
                title: "Choice 2",
                type: "radio",
                items: [
                    { id: 4, name: "Choice 4" },
                    { id: 5, name: "Choice 5" },
                    { id: 6, name: "Choice 6" },
                ],
                message: "",
                required: false,
                order: 2,
            },
            {
                title: "Special Request",
                type: "textarea",
                items: [],
                required: false,
                message: "",
                order: 3,
            },
        ],
    },
];
export default MOCK_DATA_2;
export { MOCK_DATA };