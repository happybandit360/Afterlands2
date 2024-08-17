onEvent('item.tooltip', (event) => {
    /*
    Valid Color Codes:
    
    .black()
    .darkBlue()
    .darkGreen()
    .darkAqua()
    .darkRed()
    .darkPurple()
    .gold()
    .gray()
    .darkGray()
    .blue()
    .green()
    .aqua()
    .red()
    .lightPurple()
    .yellow()
    .white()
    .color('#808080') //any hex color
    */

    const tips = [
        /*
        {
            items: ['mod:item'
            ],
            text: [Text.of('Example text').color()]
        }
        */



    ]




    tips.forEach((tip) =>{
        event.add(tip.items, tip.text);
    });


});