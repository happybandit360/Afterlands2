ServerEvents.tags("item", (event) => {
    event.add("afterlands2:sandstonetools", [
        "afterlands2:sandstone_pickaxe",
        "afterlands2:sandstone_axe",
        "afterlands2:sandstone_sword",
        "afterlands2:sandstone_shovel",
        "afterlands2:sandstone_hoe",
    ]);

    event.add("afterlands2:sandstonepick", "afterlands2:sandstone_pickaxe");

    event.add("afterlands2:tornadoitem", [
        "create:windmill_bearing",
        "create:water_wheel",
        "create:large_water_wheel"
    ])
  });

ServerEvents.tags("block", (event) => {

    event.add("afterlands2:tornadoblock", [
        "create:windmill_bearing",
        "create:water_wheel",
        "create:large_water_wheel"
    ])
})