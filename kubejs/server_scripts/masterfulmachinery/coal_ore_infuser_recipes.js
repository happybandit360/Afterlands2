MMEvents.createProcesses(event => {

    //Coal Ore Infuser
    event.create("mm:coal_ore_infuser")
        .structureId("mm:coal_infuser")
        .ticks(1000)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "minecraft:stone",
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
            ingredient: {
                type: "mm:item",
                item: "minecraft:coal_ore",
                count: 1
            }
        });
    
// Infused Zinc and Copper Ore
    event.create("mm:coal_ore_infuser_infused_zinc")
        .structureId("mm:coal_infuser")
        .ticks(1000)
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
                type: "mm:item",
                item: "create:zinc_ingot",
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
            ingredient: {
                type: "mm:item",
                item: "afterlands2:infused_zinc_ore",
                count: 1
            }
        });

    event.create("mm:coal_ore_infuser_infused_copper")
        .structureId("mm:coal_infuser")
        .ticks(1000)
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
                type: "mm:item",
                item: "minecraft:copper_ingot",
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
            ingredient: {
                type: "mm:item",
                item: "afterlands2:infused_copper_ore",
                count: 1
            }
        });



})