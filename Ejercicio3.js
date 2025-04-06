const users = [
    {
      name: "Alberto",
      favoritesSounds: {
        waves: { format: "mp3", volume: 50 },
        rain: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Antonio",
      favoritesSounds: {
        waves: { format: "mp3", volume: 30 },
        shower: { format: "ogg", volume: 55 },
        train: { format: "mp3", volume: 60 },
      },
    },
    {
      name: "Santiago",
      favoritesSounds: {
        shower: { format: "mp3", volume: 50 },
        train: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Laura",
      favoritesSounds: {
        waves: { format: "mp3", volume: 67 },
        wind: { format: "ogg", volume: 35 },
        firecamp: { format: "mp3", volume: 60 },
      },
    },
  ];
      
     let arraySounds = [];
     let arrayTipos = [];
     let arrayFormatos = [];
     let contador = 1;
     let sound;

        for (const user of users) {
            for (let sounds in user.favoritesSounds) {
                arraySounds.push(sound);
                 if (!arrayTipos.includes(user.favoritesSounds[sound].format)) {
                    arrayTipos.push(sound)
                    }
                }
                for (let i = 0; i < arrayTipos.length; i++) {
                    sound = arrayTipos[i];
                    for (let j = 0; j < arraySounds.length; j++) {
                        if (arrayTipos[j] === arraySounds[j]) {
                            contadorTipos[i]= (sound, contador);
                            contador++;
                        }
                    }

                contador = 1;
                }
            }
            console.log(arrayTipos);
            console.log(arraySounds);
            console.log(contadorTipos);
            // ['mp3', 'ogg']
    
