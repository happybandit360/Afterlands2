ServerEvents.recipes((event) => {
    event
        .shapeless("create:sand_paper", [
            "kubejs:wicker_mat",
            "#minecraft:sand",
        ]
        )
        .id("afterlands2:create_sand_paper");


})