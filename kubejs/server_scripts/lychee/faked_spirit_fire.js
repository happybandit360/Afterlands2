ServerEvents.recipes((event) => {

    // Oak Sapling
    event.custom({
        "type": "lychee:item_inside",
        "item_in": [
            { "item": "minecraft:cactus" },
            { "item": "minecraft:dead_bush" }
        ],
        "block_in": {
            "blocks": ["occultism:spirit_fire"]
        },
        "post": [
            {
                "type": "drop_item",
                "item": "minecraft:oak_sapling"
            },
            {
                "type": "place",
                "block": "minecraft:air"
            }
        ]
    });


    // Golden Sacrifical Bowl

    event.custom({
        "type": "lychee:item_inside",
        "item_in": [
            { "item": "afterlands2:fools_gold_ingot" },
            { "item": "occultism:sacrificial_bowl" }
        ],
        "block_in": {
            "blocks": ["occultism:spirit_fire"]
        },
        "post": [
            {
                "type": "drop_item",
                "item": "occultism:golden_sacrificial_bowl"
            }
        ]
    });


    // Alchemical Catalyst

    event.custom({
        "type": "lychee:item_inside",
        "item_in": [
            { "item": "occultism:datura" },
            { "item": "occultism:otherworld_ashes" },
            { "item": "occultism:burnt_otherstone" }
        ],
        "block_in": {
            "blocks": ["occultism:spirit_fire"]
        },
        "post": [
            {
                "type": "drop_item",
                "item": "afterlands2:alchemical_catalyst"
            }
        ]
    });




})