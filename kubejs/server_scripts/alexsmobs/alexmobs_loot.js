LootJS.modifiers((event) => {

    event
        .addEntityLootModifier("alexsmobs:kangaroo")
        .matchMainHand("#occultism:tools/knives")
        .addLoot("3x occultism:tallow");

    event
        .addEntityLootModifier("alexsmobs:emu")
        .matchMainHand("#occultism:tools/knives")
        .addLoot("3x occultism:tallow");

    event
        .addEntityLootModifier("alexsmobs:roadrunner")
        .matchMainHand("#occultism:tools/knives")
        .addLoot("occultism:tallow");


})