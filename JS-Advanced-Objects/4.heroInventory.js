function  inventory(input) {
    let result = [];
    while(input.length){
        let hero = input.shift();
        let [name, level, items] = hero.split(' / ');
        level = Number(level);
       items = items ? items.split(', ') : [];
        let heroObj = {
            name,
            level,
            items
        }
        result.push(heroObj);
    }

    console.log(JSON.stringify(result));
}

inventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)