let testoPunteggio = prompt("inserisci il tuo punteggio ", "70");
let punteggio = Number(testoPunteggio);

if (punteggio >= 60) {
    console.log("Soglia superata: " + punteggio);
} else {
    console.log("Soglia non raggiunta: " + punteggio)
}