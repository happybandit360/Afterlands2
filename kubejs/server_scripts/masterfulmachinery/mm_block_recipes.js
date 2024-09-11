ServerEvents.recipes((event) => {

    event.shaped("mm:coal_infuser_rotation_input", [
        "A",
        "B",
        "C"
    ], {
        A: "minecraft:coal",
        B: "create:cogwheel",
        C: "occultism:otherstone"
    })
        .id("mm:coal_infuser_rotation_input");

    event.shaped("mm:coal_infuser_item_input", [
        "ABC"
    ], {
        A: "minecraft:coal",
        B: "occultism:otherstone",
        C: "minecraft:stone"
    })
        .id("mm:coal_infuser_item_input");

    event.shaped("mm:coal_infuser_item_output", [
        "ABC"
    ], {
        A: "minecraft:stone",
        B: "occultism:otherstone",
        C: "minecraft:coal"
    })
        .id("mm:coal_infuser_item_output");

    event.shaped("mm:spirit_alchemy_rotation_input", [
        "A",
        "B",
        "C"
    ], {
        A: "create:andesite_alloy",
        B: "create:cogwheel",
        C: "occultism:otherstone"
    })
        .id("mm:spirit_alchemy_rotation_input");

    event.shaped("mm:spirit_alchemy_item_input", [
        "ABC",
    ], {
        A: "create:andesite_alloy",
        B: "create:basin",
        C: "occultism:otherstone"
    })
        .id("mm:spirit_alchemy_item_input");

    event.shaped("mm:spirit_alchemy_item_output", [
        "ABC",
    ], {
        A: "occultism:otherstone",
        B: "create:basin",
        C: "create:andesite_alloy"
    })
        .id("mm:spirit_alchemy_item_output");



})