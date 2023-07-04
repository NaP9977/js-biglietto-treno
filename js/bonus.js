


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

  document.getElementById("price").textContent = "Il prezzo è " + price;



 
}


document.getElementById("myFormS").addEventListener("submit", submitFormS);



function submitFormS(event) {
    event.preventDefault();
    
    let name = document.getElementById("inputNome").value;
    let cognome = document.getElementById("inputCognome").value;
    let km = document.getElementById("inputKm").value;
    let price = document.getElementById("price").value;
    
    let ticket = "Nome: " + name + "\nCognome: " + cognome + "\nKm da percorrere: " + km + "\nPrezzo:" + price

    document.getElementById("ticket_2").textContent =  ticket;
}


 

 