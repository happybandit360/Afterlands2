ServerEvents.recipes(event => {

    event
    .shaped("minecraft:oak_planks", [
        "AA",
        "AA"
      ], {
        A: "#forge:rods/wooden",
    })
    .id("afterlands2:sticks_to_plank");


    event
    .shaped("minecraft:dirt", [
        "AA",
        "AA"
    ], {
        A: "kubejs:dirt_nuggie"
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