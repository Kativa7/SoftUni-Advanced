function catalogue(input) {
    let catalogue = {};

    input.sort((a,b) => a.localeCompare(b));
    while(input.length){
        let line = input.shift();
        let [product , price] = line.split(' : ');
        price = Number(price);
        let index = product[0];
        if(!catalogue[index]){ 
            catalogue[index] = [];
        }
        catalogue[index].push({product, price});
}
for (const key in catalogue) {
   console.log(key);
   
   catalogue[key].forEach((element, i) => {
       console.log(`  ${element.product}: ${element.price}`);
   });
        
    }
   }
   

catalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);