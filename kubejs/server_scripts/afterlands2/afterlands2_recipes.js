ServerEvents.recipes((event) => {
    event
      .shaped("afterlands2:sandstone_pickaxe", [
          "AAA",
          " B ",
          " B "
        ], {
          A: "#forge:sandstone",
          B: "#forge:rods/wooden",
      })
      .id("afterlands2:sandstone_pickaxe");
    
    event
      .shaped("afterlands2:sandstone_axe", [
          "AA",
          "AB",
          " B"
        ], {
          A: "#forge:sandstone",
          B: "#forge:rods/wooden",
      })
      .id("afterlands2:sandstone_axe");

    event
      .shaped("afterlands2:sandstone_sword", [
          "A",
          "A",
          "B"
        ], {
          A: "#forge:sandstone",
          B: "#forge:rods/wooden",
      })
      .id("afterlands2:sandstone_sword");

    event
      .shaped("afterlands2:sandstone_shovel", [
          "A",
          "B",
          "B"
        ], {
          A: "#forge:sandstone",
          B: "#forge:rods/wooden",
      })
      .id("afterlands2:sandstone_shovel");

    event
      .shaped("afterlands2:sandstone_hoe", [
          "AA",
          " B",
          " B"
        ], {
          A: "#forge:sandstone",
          B: "#forge:rods/wooden",
      })
      .id("afterlands2:sandstone_hoe");


      event
       .shaped("afterlands2:wicker_mat", [
        "AA",
        "AA",
        "AA"
       ], {
        A: "minecraft:dead_bush"
       })
       .id("afterlands2:wicker_mat")

      event
       .shaped("afterlands2:wicker_block", [
        "AA",
        "AA"
       ], {
        A: "afterlands2:wicker_mat"
       })
       .id("afterlands2:wicker_block")

      event
       .shaped("afterlands2:flint_shears", [
        "A ",
        " A"
       ], {
        A: "afterlands2:broken_flint"
       })
       .id("afterlands2:flint_shears")

      event
       .shaped("afterlands2:cobbled_gravel", [
        "ABA",
        "BAB",
        "ABA"
       ], {
        A: "minecraft:gravel",
        B: "minecraft:dead_bush"
       })
       .id("afterlands2:cobbled_gravel")


       event.shapeless("afterlands2:fools_gold_ingot", [
        "9x afterlands2:fools_gold_nugget"
       ]).id("afterlands2:fools_gold_ingot")


      // Smelting

       event.smelting("afterlands2:cactus_paste", "minecraft:cactus").id("afterlands2:cactus_paste")

       event.smoking("afterlands2:smoked_cactus", "minecraft:cactus").id("afterlands2:smoked_cactus")

  });