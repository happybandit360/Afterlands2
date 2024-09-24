let unwanted_ore = [
    /^minecraft:.*ore$/,
    /^create:.*ore$/,
    "occultism:silver_ore",
    "occultism:silver_ore_deepslate"
  ];
  
  WorldgenEvents.remove((event) => {
    unwanted_ore.forEach((ore) => {
      event.removeOres((props) => {
        props.blocks = ore;
      });
    });
  });