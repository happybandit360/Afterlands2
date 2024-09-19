ServerEvents.recipes((event) => {
    event
        .shapeless("create:sand_paper", [
            "afterlands2:wicker_mat",
            "#minecraft:sand",
        ]
        )
        .id("afterlands2:create_sand_paper");

    event
        .shaped("createsifter:string_mesh", [
            "ABA",
            "BAB",
            "ABA"
        ], {
            A: "#forge:rods/wooden",
            B: "#forge:string"
        })
        .id("afterlands2:createsifter_string_mesh")

    event
        .shaped("create:windmill_bearing", [
            "A",
            "B",
            "C"
        ], {
            A: "#minecraft:wooden_slab",
            B: "minecraft:iron_block",
            C: "create:shaft"
        })
        .id("afterlands2:create_windmill_bearing");

    event
        .shaped("create:mechanical_piston", [
            "A",
            "B",
            "C"
        ], {
            A: "create:andesite_casing",
            B: "minecraft:piston",
            C: "create:shaft"
        })
        .id("afterlands2:create_mechanical_piston");

    event
        .shaped("create:andesite_alloy", [
            "AB",
            "BA"
        ], {
            A: "minecraft:andesite",
            B: "afterlands2:fools_gold_nugget"
        })
        .id("afterlands2:create_andesite_alloy_fools_gold");

    event
        .shapeless("create:andesite_alloy", [
            "minecraft:andesite",
            "minecraft:iron_nugget",
        ]
        )
        .id("afterlands2:create_andesite_alloy_iron");

    event
        .shapeless("create:andesite_alloy", [
            "minecraft:andesite",
            "create:zinc_nugget",
        ]
        )
        .id("afterlands2:create_andesite_alloy_zinc");

    event
        .shaped("create:andesite_alloy", [
            "A A",
            " B ",
            "A A"
        ], {

            A: "afterlands2:andesite_pebble",
            B: "afterlands2:cactus_paste"
        })
        .id("afterlands2:create_andesite_alloy_early")


})