ServerEvents.recipes(event => {

  event
    .shaped("16x minecraft:stick", [
      "A",
      "A"
    ], {
      A: "#minecraft:logs",
    })
    .id("happybandit:logs_to_sticks");

  event
    .shaped("4x minecraft:chest", [
      "AAA",
      "A A",
      "AAA"
    ], {
      A: "#minecraft:logs",
    })
    .id("happybandit:logs_to_chests");

  event
    .shapeless("minecraft:green_dye", [
      "minecraft:cactus"
    ]
    )
    .id("happybandit:green_dye")

  event
    .shapeless("minecraft:lime_dye", [
      "minecraft:sea_pickle"
    ]
    )
    .id("happybandit:lime_dye")

  event
    .shapeless("minecraft:flint", [
      "minecraft:gravel",
      "minecraft:gravel",
      "minecraft:gravel"
    ]
    )
    .id("happybandit:flint")

  event
    .shapeless("minecraft:cobweb", [
      "9x minecraft:string"
    ])
    .id("happybandit:cobweb")

})