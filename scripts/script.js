function makeIceCoffee( milk, coffee, ice, sugar ) {
    let instructions = "Boil water, ";

    instructions+= "add "+ coffee+ " spoons of coffee, ";

    instructions+= "add "+ milk+ "% of milk, ";

    instructions+= "add "+ ice+ " cubes of ice, ";

    instructions+= "and add "+ sugar+ " spoons of sugar. ";

    return instructions;

};

console.log( makeIceCoffee(30, 2, 5, 3) );