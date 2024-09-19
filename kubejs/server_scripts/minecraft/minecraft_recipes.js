ServerEvents.recipes(event => {

    event
    .shaped("minecraft:oak_planks", [
        "A A",
        " B ",
        "A A"
      ], {
        A: "#forge:rods/wooden",
        B: "afterlands2:cactus_paste"
    })
    .id("afterlands2:sticks_to_plank");

    event
    .shaped("minecraft:oak_log", [
        "AAA",
        "ABA",
        "AAA"
      ], {
        A: "minecraft:oak_planks",
        B: "afterlands2:cactus_paste"
    })
    .id("afterlands2:planks_to_log");


    event
    .shaped("minecraft:dirt", [
        "AA",
        "AA"
    ], {
        A: "afterlands2:dirt_nuggie"
    })
    .id("afterlands2:dirt_from_nuggies")

    event
    .shaped("minecraft:grass_block", [
        " A ",
        "ABA",
        " A "
    ], {
        A: "minecraft:wheat_seeds",
        B: "#minecraft:dirt"
    })
    .id("afterlands2:grass_block_from_dirt_and_seeds")
})