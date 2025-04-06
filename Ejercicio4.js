
const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan",
  ];

function findArrayIndex(array, text) {
    //Tu codigo
    let posición = Namber.Max_Value;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === text) {
            posición = i;
            break;
        }
    }
    if (posición === Number.Max_Value) {
        return -1;
    }
    else 
    {
        return posición;
    }

}
console.log(findArrayIndex(mainCharacters, "Leia")); // 1
console.log(findArrayIndex(mainCharacters, "Luke")); // 0
console.log(findArrayIndex(mainCharacters, "Anakin")); // 5

function removeItem(array, index) {
    let posición = findArrayIndex(array, index);
    if (posición !== -1) {
        array.splice(posición, 1);
    return array;
    }
    else {
        return "No existe el elemento en el array";
    }
}
console.log(removeItem(mainCharacters, "Leia")); 
console.log(removeItem(mainCharacters, "Luke"));



