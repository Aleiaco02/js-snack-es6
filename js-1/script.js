// creo array che contiene le varie bici
const biciDaCorsa = [
  { nome: "Bianchi Oltre XR4", peso: 6.8 },
  { nome: "Specialized Tarmac SL7", peso: 6.7 },
  { nome: "Trek Émonda SLR", peso: 6.9 },
  { nome: "Cannondale SuperSix EVO", peso: 7.0 },
  { nome: "Pinarello Dogma F", peso: 6.85 },
  { nome: "Giant TCR Advanced", peso: 6.9 },
  { nome: "Cervélo R5", peso: 6.75 },
  { nome: "Scott Addict RC", peso: 6.8 },
  { nome: "Colnago C64", peso: 6.5 },
  { nome: "Merida Reacto", peso: 7.0 }
];

// STAMPARE LA BICI CON IL PESO MINORE
// prima mi creo una variabile di confronto e gli assegno il valore del primo elemento dell'array in modo tale che nel for parto nel confrontare direttamente dal secondo oggetto dell'array
let biciPiùLeggera = biciDaCorsa[0];
// per farlo dobbiamo scorrere l'array in modo da controllare quale peso è il minore 
for (let i = 1; i < biciDaCorsa.length; i++) {
    
    // se il peso della i-esima bici è minore del peso della prima bici dell'array allora la variabile bici piu leggera prendera il valore della i-esima bici
    if (biciDaCorsa[i].peso < biciPiùLeggera.peso) {
        biciPiùLeggera = biciDaCorsa[i];   
    }
}

// stampiamo il tutto
console.log(biciDaCorsa);

console.log("la bici più leggera è", biciPiùLeggera.nome, "con i suoi", biciPiùLeggera.peso, "kg");








