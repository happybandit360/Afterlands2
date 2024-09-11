MMEvents.registerControllers((event) => {

    event.create("coal_infuser_controller")
    .name("Coal Infuser Controller")
    .type("mm:machine");

    event.create("spirit_alchemy_controller")
    .name("Spirit Alchemy Controller")
    .type("mm:machine");

    event.create("tri_ore_transmuter_controller")
    .name("Tri-Ore Transmuter Controller")
    .type("mm:machine");

    event.create("squeezer_controller")
    .name("Squeezer Controller")
    .type("mm:machine");
    
})