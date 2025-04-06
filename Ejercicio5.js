function rollDice(Caras) {
    return Math.floor(Math.random() * Caras) + 1;

}
function rollMultipleDice(numOfDice, Caras) {
    let total = 0;
    for (let i = 0; i < numOfDice; i++) {
        total += rollDice(Caras);
    }
    return total;
}
console.log(rollMultipleDice(2, 6)); // Lanza 2 dados de 6 caras



