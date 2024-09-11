MMEvents.createProcesses(event => {

    event.create("mm:tri_ore_transmuter")
        .structureId("mm:tri_ore_transmuter")
        .ticks(600)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "minecraft:coal_ore",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:create/kinetic",
                speed: 16
            }
        })
        .output({
            type: "mm:output/simple",
            chance: 0.5,
            ingredient: {
                type: "mm:item",
                item: "minecraft:iron_ore",
                count: 1
            }
        })
        .output({
            type: "mm:output/simple",
            chance: 0.35,
            ingredient: {
                type: "mm:item",
                item: "minecraft:copper_ore",
                count: 1
            }
        })
        .output({
            type: "mm:output/simple",
            chance: 0.15,
            ingredient: {
                type: "mm:item",
                item: "create:zinc_ore",
                count: 1
            }
        });
})