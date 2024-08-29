ServerEvents.recipes((event) => {
    event
      .shaped("kubejs:sandstone_pickaxe", [
          "AAA",
          " B ",
          " B "
        ], {
          A: "#forge:sandstone",
          B: "#forge:rods/wooden",
      })
      .id("kubejs:sandstone_pickaxe");
    
    event
      .shaped("kubejs:sandstone_axe", [
          "AA",
          "AB",
          " B"
        ], {
          A: "#forge:sandstone",
          B: "#forge:rods/wooden",
      })
      .id("kubejs:sandstone_axe");

    event
      .shaped("kubejs:sandstone_sword", [
          "A",
          "A",
          "B"
        ], {
          A: "#forge:sandstone",
          B: "#forge:rods/wooden",
      })
      .id("kubejs:sandstone_sword");

    event
      .shaped("kubejs:sandstone_shovel", [
          "A",
          "B",
          "B"
        ], {
          A: "#forge:sandstone",
          B: "#forge:rods/wooden",
      })
      .id("kubejs:sandstone_shovel");

    event
      .shaped("kubejs:sandstone_hoe", [
          "AA",
          " B",
          " B"
        ], {
          A: "#forge:sandstone",
          B: "#forge:rods/wooden",
      })
      .id("kubejs:sandstone_hoe");


      event
       .shaped("kubejs:wicker_mat", [
        "AA",
        "AA",
        "AA"
       ], {
        A: "minecraft:dead_bush"
       })
       .id("kubejs:wicker_mat")

      event
       .shaped("kubejs:wicker_block", [
        "AA",
        "AA"
       ], {
        A: "kubejs:wicker_mat"
       })
       .id("kubejs:wicker_block")

      


  });