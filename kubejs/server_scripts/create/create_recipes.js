ServerEvents.recipes((event) => {
    event
        .shapeless("create:sand_paper", [
            "kubejs:wicker_mat",
            "#minecraft:sand",
        ]
        )
        .id("afterlands2:create_sand_paper");

    event.shaped("create:windmill_bearing", [
        "A",
        "B",
        "C"
    ], {
        A: "#minecraft:wooden_slab",
        B: "minecraft:iron_block",
        C: "create:shaft"
    })
        .id("create:windmill_bearing");

    event.shaped("create:mechanical_piston", [
        "A",
        "B",
        "C"
    ], {
        A: "create:andesite_casing",
        B: "minecraft:piston",
        C: "create:shaft"
    })
        .id("create:mechanical_piston");


})