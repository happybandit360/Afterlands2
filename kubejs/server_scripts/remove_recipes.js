const removeRecipesByID = [
    "createsifter:sifting/sand_string_mesh",
    "occultism:crafting/golden_sacrifical_bowl",
    "create:crafting/kinetics/windmill_bearing"

];

const removeRecipesByInput = [

];

const removeRecipesByOutput = [


];

const removeRecipesByMod = [

];

ServerEvents.recipes((event) => {
    removeRecipesByID.forEach((id) => {
        event.remove({ id: `${id}` });
    });

    removeRecipesByInput.forEach((input) => {
        event.remove({ input: `${input}` });
    });

    removeRecipesByOutput.forEach((output) => {
        event.remove({ output: `${output}` });
    });

    removeRecipesByMod.forEach((mod) => {
        event.remove({ mod: `${mod}` });
    });

    global.hideRemoveJEI.forEach((item) => {
        event.remove({ output: `${item}` });
        // event.remove({ input: `${item}` });
    });
});
