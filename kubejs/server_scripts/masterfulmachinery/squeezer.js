MMEvents.createProcesses(event => {
    event.create("mm:squeezer_cactus_water")
        .structureId("mm:squeezer")
        .ticks(200)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "minecraft:cactus",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:create/kinetic",
                speed: 8
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:fluid",
                fluid: "minecraft:water",
                amount: 500
            }
        });

    event.create("mm:squeezer_coal_to_diamond")
        .structureId("mm:squeezer")
        .ticks(6000)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "minecraft:coal_block",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:create/kinetic",
                speed: 32
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "minecraft:diamond",
                count: 1
            }
        })
})