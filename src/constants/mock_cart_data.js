const MOCK_CART_DATA = {
    "status": true,
    "message": "Cart retrieved successfully.",
    "data": {
        "cart": {
            "id": 58,
            "customer_id": 13,
            "shop_id": 8,
            "total_price_without_discount": "30.00",
            "total_price_with_discount": "24.00",
            "total_quantity": 5,
            "voucher_id": null,
            "created_at": "2023-10-26T05:03:57.000000Z",
            "updated_at": "2023-10-26T06:21:40.000000Z"
        },
        "items": [
            {
                "id": 69,
                "item_details": {
                    "id": 1,
                    "shop_id": 2,
                    "name": "Miso Soup",
                    "description": "Aut error ut repellat facere. Fugit mollitia aut dicta dolore quasi aut dolorum. Velit eius rerum unde. Sed praesentium omnis quia voluptatibus porro ut qui.",
                    "size": 150,
                    "unit_of_measurement_id": 1,
                    "price": "7.00",
                    "item_status": "Available",
                    "image_path": "/assets/images/chicken-removebg-preview.png",
                    "menu_category_id": 3,
                    "is_veg": 0,
                    "is_new_item": 0,
                    "is_popular": 0,
                    "position": 2,
                    "created_by": null,
                    "updated_by": null,
                    "created_at": "2023-05-29T06:47:27.000000Z",
                    "updated_at": "2023-09-30T02:32:50.000000Z",
                    "deleted_at": null
                },
                "sub_total_price": "7.00",
                "sub_total_quantity": 2,
                "addons": [
                    {
                        "id": 52,
                        "cart_item_id": 69,
                        "sub_total_price": "2.00",
                        "sub_total_quantity": 1,
                        "addon_details": {
                            "id": 8,
                            "label": "New Butter",
                            "name": "Butter",
                            "price": "2.00",
                            "option_status": "Available",
                            "image_path": null,
                            "item_id": 1,
                            "created_at": "2023-09-21T01:37:37.000000Z",
                            "updated_at": "2023-09-21T01:37:37.000000Z"
                        }
                    }
                ],
                "options": []
            },
            {
                "id": 70,
                "item_details": {
                    "id": 58,
                    "shop_id": 13,
                    "name": "Stake",
                    "description": "Voluptatum totam labore voluptas repellendus ea non explicabo est. Ea esse cupiditate delectus adipisci blanditiis magni quis.",
                    "size": 150,
                    "unit_of_measurement_id": 12,
                    "price": "9.00",
                    "item_status": "Unavailable",
                    "image_path": null,
                    "menu_category_id": 35,
                    "is_veg": 0,
                    "is_new_item": 0,
                    "is_popular": 0,
                    "position": 58,
                    "created_by": null,
                    "updated_by": null,
                    "created_at": "2023-05-29T06:47:27.000000Z",
                    "updated_at": "2023-09-20T03:31:32.000000Z",
                    "deleted_at": null
                },
                "sub_total_price": "9.00",
                "sub_total_quantity": 2,
                "addons": [],
                "options": []
            }
        ]
    }
}

export default MOCK_CART_DATA;