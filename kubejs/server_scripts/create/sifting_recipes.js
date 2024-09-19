ServerEvents.recipes(event => {

// event.recipes.createsifterSifting(output[], input[])
// Optional .waterlogged() .processingTime(int time)

// Demon Fruit from Cactus
    event
    .recipes
    .createsifterSifting([Item.of('occultism:datura').withChance(0.1)], ['minecraft:cactus','createsifter:string_mesh'])

// Dirt Nuggies from Wicker Block
    event
    .recipes
    .createsifterSifting([
        Item.of('afterlands2:dirt_nuggie').withChance(1.0),
        Item.of('afterlands2:dirt_nuggie').withChance(0.5),
        Item.of('afterlands2:dirt_nuggie').withChance(0.1),
    ], ['afterlands2:wicker_block','createsifter:string_mesh'])

// Add Dead Bush and Fool's Gold to Sand, but have to add everything else back too lul
    event
    .recipes
    .createsifterSifting([
        Item.of('minecraft:dead_bush').withChance(0.6),
        Item.of('minecraft:bone_meal').withChance(0.4),
        Item.of('afterlands2:fools_gold_nugget').withChance(0.25),
        Item.of('minecraft:redstone').withChance(0.05)
    ], ['minecraft:sand', 'createsifter:string_mesh'])

// Slight boost to gold and redstone with red sand
    event
    .recipes
    .createsifterSifting([
        Item.of('minecraft:dead_bush').withChance(0.6),
        Item.of('minecraft:bone_meal').withChance(0.4),
        Item.of('afterlands2:fools_gold_nugget').withChance(0.35),
        Item.of('minecraft:redstone').withChance(0.15)
    ], ['minecraft:red_sand', 'createsifter:string_mesh'])

// Seeds from Dirt
    event
    .recipes
    .createsifterSifting([
        Item.of('minecraft:wheat_seeds').withChance(0.4)
    ], ['#minecraft:dirt', 'createsifter:string_mesh'])

})