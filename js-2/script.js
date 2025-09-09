const squadre = [
  { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Roma", puntiFatti: 0, falliSubiti: 0 }
];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let nomiFalliSubiti =[];

for (let i = 0; i < squadre.length; i++) {
  // assegno un numero random a puntiFatti solo se è 0
  if (squadre[i].puntiFatti === 0) {
    squadre[i].puntiFatti = getRandomNumber(0, 50);
  }
  // assegno un numero random a falliSubiti (esempio 0-5)
   if (squadre[i].falliSubiti === 0) {
    squadre[i].falliSubiti = getRandomNumber(0, 20);

    // creo un nuovo oggetto SENZA puntiFatti
    nomiFalliSubiti.push({
      nome: squadre[i].nome,
      falliSubiti: squadre[i].falliSubiti
    });
  }
  
}


console.log(squadre);
console.log("nomi e falli subiti", nomiFalliSubiti);