ServerEvents.recipes(event => {

    event
        .shaped("mining_dimension:teleporter", [
            "ABA",
            "BCB",
            "ABA"
        ], {
            A: "#minecraft:logs",
            B: "#minecraft:planks",
            C: "afterlands2:mystical_pickaxe"
        })
        .id("afterlands2:mining_dimension_teleporter");

})