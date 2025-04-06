const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
  ];
  function swap(array, index1, index2) {
    listaFinal = [];
    listaFinal = array;
    let save;
    let cambio;
     if (index1 > index2) {
        cambio = index1;
        index1 = index2;
        index2 = cambio;
    }

    for (let i = 0; i < array.length; i++) {
        if (i === index1) {
            save = array[index1];
            listaFinal[i] = array[index2];
        }
        else if (i === index2) {
            listaFinal[index2] = save;
        }
    }
    return listaFinal;
    }
    console.log(swap(fantasticFour, 0, 1)); 
    console.log(swap(fantasticFour, 1, 2));
    console.log(fantasticFour);
    
    
    