function fruits(fruit, grams, price) {
    let weightKG = Number(grams)/1000;
    let totalPrice = Number(price) * weightKG;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightKG.toFixed(2)} kilograms ${fruit}.`);
}
fruits('orange', 2500, 1.80)