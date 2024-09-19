ServerEvents.recipes((event) => {

    // Coal Ore

    event.recipes.occultism.ritual(
        "6x minecraft:coal_ore",
        [
            "occultism:demons_dream_essence",
            "minecraft:charcoal",
            "afterlands2:sandstone_pickaxe"
        ],
        "minecraft:stone",
        "occultism:summon_foliot"
    );

    // Infused Ores

    event.recipes.occultism.ritual(
        "afterlands2:infused_coal_ore",
        [
            "occultism:demons_dream_essence",
            "minecraft:coal_block",
            "minecraft:stone",
            "occultism:otherworld_log",
        ],
        "occultism:book_of_binding_bound_foliot",
        "occultism:summon_foliot"
    );

    event.recipes.occultism.ritual(
        "afterlands2:infused_iron_ore",
        [
            "occultism:demons_dream_essence",
            "minecraft:iron_block",
            "minecraft:stone",
            "occultism:otherworld_sapling",
        ],
        "occultism:book_of_binding_bound_foliot",
        "occultism:summon_foliot"
    );

    // Infused Ores

    event.recipes.occultism.ritual(
        "mm:coal_infuser_controller",
        [
            "afterlands2:infused_coal_ore",
            "create:andesite_casing",
            "create:cogwheel"     
        ],
        "occultism:otherworld_essence",
        "occultism:summon_foliot"
    );

    event.recipes.occultism.ritual(
        "mm:tri_ore_transmuter_controller",
        [
            "minecraft:iron_ingot",
            "minecraft:copper_ingot",
            "create:zinc_ingot",
            "create:andesite_casing"     
        ],
        "occultism:otherworld_essence",
        "occultism:summon_foliot"
    );


})