MMEvents.createProcesses(event => {

    //Coal to Iron Nuggets
    event.create("mm:spirit_alchemy_coal_to_iron_nugget")
        .structureId("mm:spirit_alchemy")
        .ticks(200)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "minecraft:coal",
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
                type: "mm:item",
                item: "minecraft:iron_nugget",
                count: 1
            }
        });


    //Fool's Gold Purification
    event.create("mm:spirit_alchemy_fools_gold_purification")
        .structureId("mm:spirit_alchemy")
        .ticks(900)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "afterlands2:fools_gold_ingot",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "afterlands2:alchemical_catalyst",
                count: 2
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:create/kinetic",
                speed: 12
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "minecraft:gold_ingot",
                count: 1
            }
        });

    //Iron and Stuff to Zinc and Copper Ingots
    event.create("mm:spirit_alchemy_iron_to_zinc")
        .structureId("mm:spirit_alchemy")
        .ticks(800)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "minecraft:iron_ingot",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "create:andesite_alloy",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:create/kinetic",
                speed: 12
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "create:zinc_ingot",
                count: 1
            }
        });

    event.create("mm:spirit_alchemy_iron_to_copper")
        .structureId("mm:spirit_alchemy")
        .ticks(800)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "minecraft:iron_ingot",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "minecraft:granite",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:create/kinetic",
                speed: 12
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "minecraft:copper_ingot",
                count: 1
            }
        });

    // Redstone
    event.create("mm:spirit_alchemy_redstone")
        .structureId("mm:spirit_alchemy")
        .ticks(1000)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "minecraft:gunpowder",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "afterlands2:alchemical_catalyst",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "create:cogwheel",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:create/kinetic",
                speed: 12
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "minecraft:redstone",
                count: 2
            }
        });


    //Spirit Attuned Gem to Source Gem
    event.create("mm:spirit_alchemy_spirit_gem_to_source_gem")
        .structureId("mm:spirit_alchemy")
        .ticks(100)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "occultism:spirit_attuned_gem",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:create/kinetic",
                speed: 4
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "ars_nouveau:source_gem",
                count: 1
            }
        });


    //Peashooter Lawn Defender
    event.create("mm:spirit_alchemy_peashooter")
        .structureId("mm:spirit_alchemy")
        .ticks(200)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                tag: "forge:eggs",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "occultism:datura",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "minecraft:gunpowder",
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
                type: "mm:item",
                item: "lawn_defenders:peashooter_spawn_egg",
                count: 1
            }
        });



})