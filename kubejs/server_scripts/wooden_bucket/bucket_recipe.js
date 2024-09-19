ServerEvents.recipes((event) => {

    event
    .shaped("woodenbucket:wooden_bucket", [
        "A A",
        "A A",
        " A "
    ], {
        A: "#minecraft:logs"
    })
    .id("afterlands2:woodenbucket")


});