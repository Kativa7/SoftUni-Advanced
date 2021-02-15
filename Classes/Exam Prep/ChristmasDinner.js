class ChristmasDinner {
    constructor(budget) {
        this.dishes = [];
        this.products = [];
        this.guests = {};
        this.budget = budget;
        this.list = {};
        if (this.budget < 0 ) {
            throw new Error("The budget cannot be a negative number")
        }
    }


    shopping(product) {
        let productName = product[0];
        let price = Number(product[1]);
        if (this.budget < price) {
            throw new Error('Not enough money to buy this product');
        }
        this.products.push(productName);
        this.budget -= price;
        return `You have successfully bought ${productName}!`
    }

    recipes(recipe) {
        let productsRecived = recipe.productsList;
        let count = 0;
        for (let i = 0; i < productsRecived.length; i++) {
            if (this.products.includes(productsRecived[i])) {
                count++;
            } else {
                throw new Error("We do not have this product")
            }
        }
        if (count == productsRecived.length) {
            this.list[recipe.recipeName] = recipe.productsList;
            this.dishes.push(recipe);
            return `${recipe.recipeName} has been successfully cooked!`
        }

    }

    inviteGuests(name, dish) {
        let dishesNames = [];
        let keys = this.dishes.forEach(recipe => {
            dishesNames.push(recipe.recipeName)
        })

        if (!dishesNames.includes(dish)) {
            throw new Error('We do not have this dish');
        }
        if (!this.guests.hasOwnProperty(name)) {
            this.guests[name] = dish
            return `You have successfully invited ${name}!`
        } else {
            throw new Error('This guest has already been invited')
        }

    }

    showAttendance() {
        let result = '';
        for (let guest in this.guests) {

            result += `${guest} will eat ${this.guests[guest]}, which consists of ${this.list[this.guests[guest]].join(', ')}\n`
        }

        return result.trim();
    }

}

let dinner = new ChristmasDinner(-300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());





