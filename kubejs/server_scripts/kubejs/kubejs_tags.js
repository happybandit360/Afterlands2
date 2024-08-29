ServerEvents.tags("item", (event) => {
    event.add("kubejs:sandstonetools", [
        "kubes:sandstone_pickaxe",
        "kubejs:sandstone_axe",
        "kubejs:sandstone_sword",
        "kubejs:sandstone_shovel",
        "kubejs:sandstone_hoe",
    ]);

    event.add("kubejs:sandstonepick", "kubes:sandstone_pickaxe");

    event.add("kubejs:tornadoitem", [
        "create:windmill_bearing",
        "create:water_wheel",
        "create:large_water_wheel"
    ])
  });

ServerEvents.tags("block", (event) => {

    event.add("kubejs:tornadoblock", [
        "create:windmill_bearing",
        "create:water_wheel",
        "create:large_water_wheel"
    ])
})