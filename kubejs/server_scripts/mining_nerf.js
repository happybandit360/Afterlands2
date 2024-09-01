BlockEvents.broken("minecraft:stone", (event) => {
  if (event.player.mainHandItem.hasTag("afterlands2:sandstonepick")) {
    event.block.set("minecraft:cobblestone");
    event.cancel();
  }
});

BlockEvents.broken("minecraft:cobblestone", (event) => {
    if (event.player.mainHandItem.hasTag("afterlands2:sandstonepick")) {
      event.block.set("minecraft:gravel");
      event.cancel();
    }
  });