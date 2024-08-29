ServerEvents.recipes(event => {

    event
    .custom({
        "type": "mowlib:dualhandedcrafting",
        "blockTarget": {
          "tag": "minecraft:logs_that_burn"
        },
        "mainhandTool": {
          "item": "minecraft:flint"
        },
        "consumeMainhandItem": true,
        "offhandTool": {
          "item": "occultism:datura"
        },
        "consumeOffhandItem": true,
        "result": {
          "item": "occultism:spirit_fire"
        }
      })


})
