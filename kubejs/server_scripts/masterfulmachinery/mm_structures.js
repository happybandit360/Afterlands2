MMEvents.createStructures((event) => {

//Coal Infuser

event.create("mm:coal_infuser")
.controllerId("mm:coal_infuser_controller")
.name("Coal Infuser")
.layout(a => {
    a.layer([
        "ABA",
        "BDB",
        "ASA"
    ])
    .layer([
        "BRB",
        "IEO",
        "BCB"
    ])
    .layer([
        "ABA",
        "BBB",
        "ABA"
    ])
    .key("A", { block: "occultism:otherworld_log" })
    .key("B", { block: "occultism:otherstone" })
    .key("D", { block: "occultism:spirit_fire" })
    .key("E", { block: "createsifter:sifter" })
    .key("I", { block: "mm:coal_infuser_item_input" })
    .key("O", { block: "mm:coal_infuser_item_output" })
    .key("R", { block: "mm:coal_infuser_rotation_input" })
    .key("S", { block: "afterlands2:infused_coal_ore" })
});


// Spirit Alchemy

    event.create("mm:spirit_alchemy")
    .controllerId("mm:spirit_alchemy_controller")
    .name("Spirit Alchemy")
    .layout(a => {
        a.layer([
            "   ",
            "IBO",
            "   "
        ])
        .layer([
            "E E",
            " D ",
            "E E"
        ])
        .layer([
            "ARA",
            "AAA",
            "ACA"
        ])
        .key("A", { block: "occultism:otherstone" })
        .key("B", { block: "create:basin" })
        .key("D", { block: "occultism:spirit_fire" })
        .key("E", { block: "occultism:golden_sacrificial_bowl" })
        .key("I", { block: "mm:spirit_alchemy_item_input" })
        .key("O", { block: "mm:spirit_alchemy_item_output" })
        .key("R", { block: "mm:spirit_alchemy_rotation_input" })
    });


// Tri-Ore Transmuter

    event.create("mm:tri_ore_transmuter")
    .controllerId("mm:tri_ore_transmuter_controller")
    .name("Tri-Ore Transmuter")
    .layout(a => {
        a.layer([
            "   ",
            " C ",
            "   "
        ])
        .layer([
            " E ",
            "   ",
            "F G"
        ])
        .layer([
            " R ",
            " B ",
            "I O"
        ])
        .layer([
            " A ",
            " A ",
            "AAA"
        ])
        .key("A", { block: "occultism:otherstone" })
        .key("B", { block: "occultism:spirit_fire" })
        .key("E", { block: "afterlands2:infused_zinc_ore" })
        .key("F", { block: "afterlands2:infused_iron_ore" })
        .key("G", { block: "afterlands2:infused_copper_ore" })
        .key("I", { block: "mm:tri_ore_transmuter_item_input" })
        .key("O", { block: "mm:tri_ore_transmuter_item_output" })
        .key("R", { block: "mm:tri_ore_transmuter_rotation_input" })
    })

// Squeezer

    event.create("mm:squeezer")
    .controllerId("mm:squeezer_controller")
    .name("Squeezer")
    .layout(a => {
        a.layer([
            "   ",
            " A ",
            "   "
        ])
        .layer([
            " S ",
            "I O",
            " C "
        ])
        .layer([
            " R ",
            " B ",
            "   "
        ])
        .key("A", { block: "minecraft:iron_block" })
        .key("B", { block: "create:mechanical_piston" })
        .key("I", { block: "mm:squeezer_item_input" })
        .key("O", { block: "mm:squeezer_item_output" })
        .key("R", { block: "mm:squeezer_rotation_input" })
        .key("S", { block: "mm:squeezer_fluid_output" })
    })




})