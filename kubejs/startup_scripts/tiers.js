ItemEvents.toolTierRegistry(event => {
    event.add('sandstone', tier => {
      tier.uses = 30
      tier.speed = 2.0
      tier.attackDamageBonus = -1.0
      tier.level = 1
      tier.enchantmentValue = 5
      tier.repairIngredient = '#forge:sandstone'
    })
  })