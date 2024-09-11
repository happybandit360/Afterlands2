ServerEvents.recipes((event) => {

    event.recipes.create
    .sandpaper_polishing(
        Item.of("afterlands2:andesite_pebble").withChance(0.5),
        "minecraft:andesite"
    );

})