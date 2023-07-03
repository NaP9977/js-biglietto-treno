let kmToGo = prompt("quanti km devi percorre?");
let age = parseInt (prompt("Quanti anni hai?"));

if(age > 18 || age < 65){
    let basePrice = kmToGo * 0.21;
}
else if(age < 18){
    let basePrice = (kmToGo * 0.21) - (0.20)(kmToGo * 0.21);
}
else{
    let basePrice = (kmToGo * 0.21) - (0.40)(kmToGo * 0.21);
}

