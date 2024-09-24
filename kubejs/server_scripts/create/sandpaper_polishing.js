ServerEvents.recipes((event) => {

    event.recipes.create
    .sandpaper_polishing(
        Item.of("exnihilosequentia:andesite_pebble").withChance(0.5),
        "minecraft:andesite"
    );

})