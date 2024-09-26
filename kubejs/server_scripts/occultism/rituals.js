ServerEvents.recipes((event) => {

    // Coal Ore

    event.recipes.occultism.ritual(
        "6x minecraft:coal_ore",
        [
            "occultism:demons_dream_essence",
            "minecraft:charcoal",
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
            "occultism:otherworld_log"
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
            "occultism:otherworld_log"
        ],
        "occultism:book_of_binding_bound_foliot",
        "occultism:summon_foliot"
    );

    // Controllers

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
        "mm:spirit_alchemy_controller",
        [
            "minecraft:coal_ore",
            "create:andesite_casing",
            "afterlands2:alchemical_catalyst",
            "occultism:golden_sacrificial_bowl"     
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


// Spawn Eggs

    event.recipes.occultism.ritual(
        "minecraft:chicken_spawn_egg",
        [
            "alexsmobs:emu_egg",
            "minecraft:chicken",
            "minecraft:bone",
            "minecraft:feather"     
        ],
        "occultism:book_of_binding_bound_djinni",
        "occultism:summon_foliot"
    );


// Spawn Eggs

    event.recipes.occultism.ritual(
        "ars_nouveau:blue_archwood_sapling",
        [
            "ars_nouveau:source_gem",
            "minecraft:lapis_lazuli"
        ],
        "minecraft:oak_sapling",
        "occultism:summon_foliot"
    );

    event.recipes.occultism.ritual(
        "ars_nouveau:red_archwood_sapling",
        [
            "ars_nouveau:source_gem",
            "minecraft:redstone"
        ],
        "minecraft:oak_sapling",
        "occultism:summon_foliot"
    );

    event.recipes.occultism.ritual(
        "ars_nouveau:green_archwood_sapling",
        [
            "ars_nouveau:source_gem",
            "occultism:datura"
        ],
        "minecraft:oak_sapling",
        "occultism:summon_foliot"
    );

    event.recipes.occultism.ritual(
        "ars_nouveau:purple_archwood_sapling",
        [
            "ars_nouveau:source_gem",
            "occultism:datura_seeds"
        ],
        "minecraft:oak_sapling",
        "occultism:summon_foliot"
    );


})