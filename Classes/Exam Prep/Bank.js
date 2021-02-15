class Bank {
    constructor(bankName) {
        let _bankName = bankName;
        this.setName = function (bankName) { _bankName = bankName };
        this.getName = function () { return _bankName };
        this.allCustomers = [];

    }

    newCustomer(customer) {
        if (!this.allCustomers.find(x => x.firstName === customer.firstName)) {
            this.allCustomers.push(customer);
            return customer;
        } else {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
        }
    }

    depositMoney(personalId, amount) {
        amount = Number(amount);
        let currentCustomer = this.allCustomers.find(x => x.personalId === personalId);
        if (!currentCustomer) {
            throw new Error('We have no customer with this ID!')
        } else {
            if (!currentCustomer.hasOwnProperty('totalMoney')) {
                currentCustomer.totalMoney = 0;
            }
            currentCustomer.totalMoney += amount;
            if (!currentCustomer.hasOwnProperty('transactions')) {
                currentCustomer.transactions = [];

            }
            currentCustomer.transactions.push({['made deposit of']: amount });
            
            return `${currentCustomer.totalMoney}$`
        }
    }

    withdrawMoney(personalId, amount) {
        amount = Number(amount);
        let currentCustomer = this.allCustomers.find(x => x.personalId === personalId);

        if (!currentCustomer) {
            throw new Error('We have no customer with this ID!');
        } else {
            if (currentCustomer.totalMoney < amount) {
                throw new Error(`${currentCustomer.firstName} ${currentCustomer.lastName} does not have enough money to withdraw that amount!`)
            } else {
                currentCustomer.totalMoney -= amount;
                currentCustomer.transactions.push({ withdrew: amount });
               
                return `${currentCustomer.totalMoney}$`
            }
        }
    }

    customerInfo(personalId) {
        let currentCustomer = this.allCustomers.find(x => x.personalId === personalId);
       
        if (!currentCustomer) {
            throw new Error('We have no customer with this ID!');
        } else {
            let result = '';
            result += `Bank name: ${this.getName()}\n`
            result += `Customer name: ${currentCustomer.firstName} ${currentCustomer.lastName}\n`
            result += `Customer ID: ${currentCustomer.personalId}\n`
            result += `Total Money: ${currentCustomer.totalMoney}$\n`
            result += 'Transactions:\n'
            for(let i = currentCustomer.transactions.length - 1; i>=0; i--){
               result +=`${i+1}. ${currentCustomer.firstName} ${currentCustomer.lastName} ${Object.keys(currentCustomer.transactions[i])} ${Object.values(currentCustomer.transactions[i])}$!\n`;
                   
                  }
            return result.trim()
        }

    }
}


let bank = new Bank('SoftUni Bank');
bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 });


bank.depositMoney(6233267, 250);
bank.depositMoney(6233267, 250);
bank.withdrawMoney(6233267, 125);
console.log(bank.customerInfo(6233267));


