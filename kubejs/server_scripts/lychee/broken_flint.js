ServerEvents.recipes((event) => {

    event.custom(
        {
            "type": "lychee:block_clicking",
            "item_in": {
                "item": "minecraft:flint"
            },
            "block_in": "#forge:stone",
            "contextual": [
                {
                    "type": "is_sneaking"
                }
            ],
            "post": [
                {
                    "type": "drop_item",
                    "item": "afterlands2:broken_flint"
                }
            ]
        }
    )    

})