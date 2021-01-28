function solve(input) {
    let keys = input.shift().split(' | ').join(' ').split(' ').filter(x => x != '|');;
    let [Town, Latitude, Longitude] = keys;
    let result = [];
input.forEach(line => {
    let arr = line.split('|').filter(x => x != '');
    let [town, latitude, longitude] = arr;
    town = town.trim();
    latitude = Number(latitude).toFixed(2);
    longitude = Number(longitude).toFixed(2); 
   let obj = {
Town: town,
Latitude:Number(latitude),
Longitude: Number(longitude),
}
result.push(obj);
});
console.log(JSON.stringify(result));
 
}

solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)