StartupEvents.registry("item", (event) => {

  event
    .create("afterlands2:sandstone_pickaxe", "pickaxe")
    .tier("sandstone")
    .displayName("Sandstone Pickaxe");

  event
    .create("afterlands2:sandstone_axe", "axe")
    .tier("sandstone")
    .displayName("Sandstone Axe");

  event
    .create("afterlands2:sandstone_sword", "sword")
    .tier("sandstone")
    .displayName("Sandstone Sword");

  event
    .create("afterlands2:sandstone_shovel", "shovel")
    .tier("sandstone")
    .displayName("Sandstone Shovel");

  event
    .create("afterlands2:sandstone_hoe", "hoe")
    .tier("sandstone")
    .displayName("Sandstone Hoe");


  event
    .create("afterlands2:wicker_mat")
    .displayName("Wicker Mat")

  event
    .create("afterlands2:dirt_nuggie")
    .displayName("Dirt Nugget")

  event
    .create("afterlands2:flint_shears", "shears")
    .displayName("Flint Shears")
    .maxDamage(30)
  
  event
    .create("afterlands2:broken_flint")
    .displayName("Broken Flint")
  
  event
    .create("afterlands2:fools_gold_nugget")
    .displayName("Fool's Gold Nugget")
  
  event
    .create("afterlands2:fools_gold_ingot")
    .displayName("Fool's Gold Ingot")
  
  event
    .create("afterlands2:alchemical_catalyst")
    .displayName("Alchemical Catalyst")
  
  event
    .create("afterlands2:cactus_paste")
    .displayName("Cactus Paste")

  event
    .create("afterlands2:mystical_pickaxe")
    .displayName("Mystical Pickaxe")

  event
    .create("afterlands2:smoked_cactus").food(food => {
      food
        .hunger(3)
        .saturation(0.5) // This value does not directly translate to saturation points gained
        // The real value can be assumed to be:
        // min(hunger * saturation * 2 + saturation, foodAmountAfterEating)
      })
    .displayName("Smoked Cactus")
})