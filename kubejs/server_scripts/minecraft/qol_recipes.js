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


})