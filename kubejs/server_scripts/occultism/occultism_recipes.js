ServerEvents.recipes(event => {

    event.shapeless("occultism:datura_seeds", "occultism:datura")
        .id("afterlands2:demonfruit_to_seed")


    event.shaped("occultism:butcher_knife", [
        " AB",
        "AB ",
        "B  "
    ], {
        A: "afterlands2:broken_flint",
        B: "#forge:rods/wooden"

    }).id("afterlands2:occultism_butcher_knife")


})