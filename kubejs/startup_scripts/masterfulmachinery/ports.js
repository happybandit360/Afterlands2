MMEvents.registerPorts((event) => {

// Coal Infuser
    event.create("coal_infuser_item")
    .name("Coal Infuser Item")
    .controllerId("mm:coal_infuser_controller")
    .config("mm:item", c => {
        c.rows(3)
        .columns(3)
    });

    event.create("coal_infuser_rotation")
    .name("Coal Infuser Rotation")
    .controllerId("mm:coal_infuser_controller")
    .config("mm:create/kinetic", c => {
        c.stress(32)
    });

// Spirit Alchemy
    event.create("spirit_alchemy_item")
    .name("Spirit Alchemy Item")
    .controllerId("mm:spirit_alchemy_controller")
    .config("mm:item", c => {
        c.rows(3)
        .columns(3)
    });

    event.create("spirit_alchemy_rotation")
    .name("Spirit Alchemy Rotation")
    .controllerId("mm:spirit_alchemy_controller")
    .config("mm:create/kinetic", c => {
        c.stress(16)
    });

// Tri-Ore Transmuter
    event.create("tri_ore_transmuter_item")
    .name("Tri-Ore Transmuter Item")
    .controllerId("mm:tri_ore_transmuter_controller")
    .config("mm:item", c => {
        c.rows(3)
        .columns(3)
    });

    event.create("tri_ore_transmuter_rotation")
    .name("Tri-Ore Transmuter Rotation")
    .controllerId("mm:tri_ore_transmuter_controller")
    .config("mm:create/kinetic", c => {
        c.stress(32)
    });

// Squeezer
    event.create("squeezer_item")
    .name("Squeezer Item")
    .controllerId("mm:squeezer_controller")
    .config("mm:item", c => {
        c.rows(3)
        .columns(3)
    });

    event.create("squeezer_rotation")
    .name("Squeezer Rotation")
    .controllerId("mm:squeezer_controller")
    .config("mm:create/kinetic", c => {
        c.stress(32)
    });

    event.create("squeezer_fluid")
    .name("Squeezer Fluid")
    .controllerId("mm:squeezer_controller")
    .config("mm:fluid", c => {
        c.rows(1)
        .columns(1)
        .slotCapacity(16000)
    })



})