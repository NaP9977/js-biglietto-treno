let kmToGo = prompt("quanti km devi percorrere?");
let age = parseInt (prompt("Quanti anni hai?"));

let price = kmToGo * 0.21;

if(age < 18){
    price = price - (20 * price/100);
}
else if (age > 65){
  price = price - (40 * price /100);}


console.log(price);