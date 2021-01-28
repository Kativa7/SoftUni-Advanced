function townPopulation(input) {
    let myobj = {};
    for (const line of input) {
        let [name, population] = line.split(' <-> ');
        population = Number(population)
        if(!myobj.hasOwnProperty(name)){
            myobj[name] = population;
        }else{
            myobj[name] += population;
        }
    }
    for (const key in myobj) {
       console.log(`${key} : ${myobj[key]}`);
    }
    
}
townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']

)