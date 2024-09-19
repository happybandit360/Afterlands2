ServerEvents.recipes((event) => {

    event
    .shaped("woodenhopper:wooden_hopper", [
        "A A",
        "ABA",
        " A "
    ], {
        A: "#minecraft:logs",
        B: "#forge:chests/wooden"
    })
    .id("afterlands2:woodenhopper")


});