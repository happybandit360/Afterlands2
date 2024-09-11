StartupEvents.registry("block", (event) => {
    /* Example event
    event.create("modid:blockid") // Create a new block
      .displayName("a display name string") // Set a custom name
      .mapColor("color") // Set a material (affects the sounds and some properties)
      .soundType("string")
      .hardness(2.0) // Set hardness (affects mining time) (double)
      .resistance(1.0) // Set resistance (to explosions, etc) (double)
      .requiresTool(true) // Requires a tool or it won't drop (see tags below) (boolean)
      .tagBlock("modid:tagid") // Tag the block with 
      .tagBlock("mineable/pickaxe") // or a pickaxe
      .tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron */


    event.create("afterlands2:wicker_block")
        .displayName("Wicker Block")
        .cropSoundType()
        .hardness(0.5)
        .resistance(1.0)
        .requiresTool(false)

    event.create("afterlands2:cobbled_gravel", "falling")
        .displayName("Cobbled Gravel")
        .gravelSoundType()
        .hardness(1)
        .resistance(1.0)
        .requiresTool(false)

    event.create("afterlands2:infused_coal_ore")
        .displayName("Infused Coal Ore")
        .stoneSoundType()
        .hardness(3.0)
        .resistance(3.0)
        .requiresTool(false)

    event.create("afterlands2:infused_iron_ore")
        .displayName("Infused Iron Ore")
        .stoneSoundType()
        .hardness(3.0)
        .resistance(3.0)
        .requiresTool(false)

    event.create("afterlands2:infused_copper_ore")
        .displayName("Infused Copper Ore")
        .stoneSoundType()
        .hardness(3.0)
        .resistance(3.0)
        .requiresTool(false)

    event.create("afterlands2:infused_zinc_ore")
        .displayName("Infused Zinc Ore")
        .stoneSoundType()
        .hardness(3.0)
        .resistance(3.0)
        .requiresTool(false)



})