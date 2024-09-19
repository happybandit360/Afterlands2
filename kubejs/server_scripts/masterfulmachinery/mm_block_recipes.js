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
        " D ",
        "ABC"
    ], {
        A: "minecraft:coal",
        B: "occultism:otherstone",
        C: "minecraft:stone",
        D: "#forge:chests/wooden"
    })
        .id("mm:coal_infuser_item_input");

    event.shaped("mm:coal_infuser_item_output", [
        "ABC",
        " D "
    ], {
        A: "minecraft:stone",
        B: "occultism:otherstone",
        C: "minecraft:coal",
        D: "#forge:chests/wooden"
    })
        .id("mm:coal_infuser_item_output");

    event.shaped("mm:spirit_alchemy_rotation_input", [
        "A",
        "B",
        "C"
    ], {
        A: "afterlands2:alchemical_catalyst",
        B: "create:cogwheel",
        C: "occultism:otherstone"
    })
        .id("mm:spirit_alchemy_rotation_input");

    event.shaped("mm:spirit_alchemy_item_input", [
        " D ",
        "ABC"
    ], {
        A: "afterlands2:alchemical_catalyst",
        B: "create:basin",
        C: "occultism:otherstone",
        D: "#forge:chests/wooden"
    })
        .id("mm:spirit_alchemy_item_input");

    event.shaped("mm:spirit_alchemy_item_output", [
        "ABC",
        " D "
    ], {
        A: "occultism:otherstone",
        B: "create:basin",
        C: "afterlands2:alchemical_catalyst",
        D: "#forge:chests/wooden"
    })
        .id("mm:spirit_alchemy_item_output");



})