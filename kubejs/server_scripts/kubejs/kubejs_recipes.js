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



  });