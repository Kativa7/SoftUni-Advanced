 function tickets(arr, criteria) {
    class Ticket {
        constructor(destination, price, status){
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
 let resultArr = [];
    for (const line of arr) {
        let [destination, price, status] = line.split('|');
         let newTicket = new Ticket (destination, price, status);
       resultArr.push(newTicket);   
    }
    if(criteria == "destination"){
        resultArr.sort((a,b)=>a.destination.localeCompare(b.destination));
    }else if(criteria == "status"){
        resultArr.sort((a,b)=>a.status.localeCompare(b.status));
    }else if(criteria == "price"){
        resultArr.sort((a,b)=>a.price - b.price);

    }
   return resultArr;

}

tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'price'
)


