ServerEvents.recipes(event => {

   // Otherstone Alt
  event
    .custom({
      "type": "occultism:spirit_fire",
      "ingredient": {
        "item": "minecraft:granite"
      },
      "result": {
        "count": 1,
        "item": "occultism:otherstone"
      }
    });

  event
    .custom({
      "type": "occultism:spirit_fire",
      "ingredient": {
        "item": "minecraft:diorite"
      },
      "result": {
        "count": 1,
        "item": "occultism:otherstone"
      }
    });

  // Paper from Wicker Mat

  event
    .custom({
      "type": "occultism:spirit_fire",
      "ingredient": {
        "item": "afterlands2:wicker_mat"
      },
      "result": {
        "count": 1,
        "item": "minecraft:paper"
      }
    });


})