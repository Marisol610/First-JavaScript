console.log("Welcome to my Bakery");
var productsName=prompt("Enter products name");
var quantity=prompt("Enter product quantity");
var price=prompt("Enter product price");


console.log(productsName);
console.log(quantity);
console.log(price);

let total=quantity*price;
let taxes= .06;
statetaxes= total * taxes;
grandtotal=statetaxes+total;
console.log(statetaxes);
console.log(grandtotal);