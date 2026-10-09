let codice = "1234";

if (codice == 1234) {
    console.log("confronto debole: i valori sono considerati uguali");
}
if (codice === 1234) {
    console.log("questo non viene stampato");

} else {
    console.log("confronto stretto: tipo diverso, non sono uguali");
}