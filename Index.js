console.log("Classificador de Rank")

const prompt = require("prompt-sync")();


let nome = prompt('Qual é o seu Nick ?:  ');

let exp= prompt("Quantidade de Experiencia(XP): ");



if (exp <= 1000) {
    elo= "Ferro"
}
else if(exp <=2000) {
    elo= "Bronze"
}
else if (exp <= 5000) {
    elo= "Prata"
}
else if (exp <= 7000) {
    elo= "Ouro"
}
else if (exp <=8000) {
    elo= "Platina"
}
else if (exp <=9000) {
    elo= "Ascendente"
}
else if (exp <= 10000) {
    elo= "Imortal" 
}
else if (exp >= 10001) {
    elo= "Radiante"
}

console.log (`${elo}`)
console.log(`O Herói de nome: ${nome} , está no nível ${elo}. `);

