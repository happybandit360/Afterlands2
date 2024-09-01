JEIEvents.hideItems((event) => {
    global.hideRemoveJEI.forEach((item) => {
        event.hide(item);
    });
});