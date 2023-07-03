function submitForm(event){
    event.preventDefault(); 
    let kmToGo = parseInt(document.getElementById("inputKm").value);
let age = parseInt(document.getElementById("inputeta").value);

let price = Math.floor(kmToGo * 0.21);
if(age < 18){
    price = price - (20 * price/100);
}
else if (age > 65){
  price = price - (40 * price /100);}


document.getElementById("risultato").innerHTML= "Il prezzo è " + price;



}