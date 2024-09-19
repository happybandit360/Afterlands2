ServerEvents.recipes((event) => {
    event
        .shapeless("create:sand_paper", [
            "afterlands2:wicker_mat",
            "#minecraft:sand",
        ]
        )
        .id("afterlands2:create_sand_paper");

    event.shaped("createsifter:string_mesh", [
        "ABA",
        "BAB",
        "ABA"
    ], {
        A: "#forge:rods/wooden",
        B: "#forge:string"
    })
    .id("afterlands2:createsifter_string_mesh")

    event.shaped("create:windmill_bearing", [
        "A",
        "B",
        "C"
    ], {
        A: "#minecraft:wooden_slab",
        B: "minecraft:iron_block",
        C: "create:shaft"
    })
        .id("afterlands2:create_windmill_bearing");

    event.shaped("create:mechanical_piston", [
        "A",
        "B",
        "C"
    ], {
        A: "create:andesite_casing",
        B: "minecraft:piston",
        C: "create:shaft"
    })
        .id("afterlands2:create_mechanical_piston");


})