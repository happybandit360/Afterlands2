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

})