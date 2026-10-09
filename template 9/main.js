let nome = prompt("Qual è il tuo nome? ", "mario");
let testoEta = prompt("qual è la tua età? ", "18");
let eta = Number(testoEta);
let numeroCasuale = Math.floor(Math.random() * 101);
let messaggio = "nome mancante"

if (nome) {
    messaggio = "ciao " + nome;
    if (eta >= 18) {
        messaggio = messaggio + " - maggiorenne";
    } else {
        messaggio = messaggio + " - minorenne";
    }
    if (numeroCasuale > 90 || eta > 60) {
        messaggio = messaggio + ", numero fortunato";
    }
}
console.log(messaggio)


