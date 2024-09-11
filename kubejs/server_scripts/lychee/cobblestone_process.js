ServerEvents.recipes((event) => {

    event.custom({
        "type": "lychee:block_crushing",
        "item_in": [
            { "item": "minecraft:cactus" },
            { "item": "minecraft:cactus" },
            { "item": "minecraft:cactus" }
        ],
        "falling_block": "afterlands2:cobbled_gravel",
        "post": [
            {
                "type": "place",
                "offsetX": 1,
                "offsetY": 1,
                "block": "minecraft:water",
                "state": {
                    "level": 0
                }
            }
        ]

    })

    event.custom({
        "type": "lychee:item_inside",
        "item_in": [
            {
                "item": "afterlands2:cobbled_gravel"
            }
        ],
        "block_in": {
            "blocks": ["minecraft:water"],
            "state": {
                "level": 0
            }
        },
        "post": [
            {
                "type": "drop_item",
                "item": "minecraft:cobblestone"
            },
            {
                "type": "place",
                "block": "minecraft:air"
            }
        ]
    })


})