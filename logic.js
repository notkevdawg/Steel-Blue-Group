var coords = [
    ['a1', "b1", "c1", "d1", "e1", "f1", "g1", "h1", "i1"],
    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2", "i2"],
    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3", "i3"],
    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4", "i4"],
    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5", "i5"],
    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6", "i6"],
    ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7", "i7"],
    ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8", "i8"],
    ["a9", "b9", "c9", "d9", "e9", "f9", "g9", "h9", "i9"]
    ]
    var computer_coords = [
    ['a1', "b1", "c1", "d1", "e1", "f1", "g1", "h1", "i1"],
    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2", "i2"],
    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3", "i3"],
    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4", "i4"],
    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5", "i5"],
    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6", "i6"],
    ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7", "i7"],
    ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8", "i8"],
    ["a9", "b9", "c9", "d9", "e9", "f9", "g9", "h9", "i9"]
    ]
    var goodGuesses = []
    var badGuesses = []
    var winCounter = []
    var computerGuesses = []
    var lostCounter = []
    var hitCounter = 0
    var turnsleft = 0
    
    var battleship1 = [
        coords[0][0],
        coords[0][1],
        2
    ]
        
    var battleship2 = [
        coords[3][5],
        coords[3][4],
        coords[3][3],
        3
    ]
    var battleship3 = [
        coords[4][3],
        coords[4][2],
        coords[4][1],
        3
    ]
    var battleship4 = [
        coords[4][3],
        coords[4][2],
        coords[4][1],
        coords[4][1],
        4
    ]
    var battleship5 = [
        coords[4][3],
        coords[4][2],
        coords[4][1],
        coords[4][1],
        coords[4][1],
        5
    ]
    var battleships = [battleship1, battleship2, battleship3, battleship4, battleship5]
    function begin(){
    }
    // userGuess = a1 needs to be deleted
    function chooseNcheck() {
        //var userGuess = document.ggetElementById("needs to change").onclick
        var userGuess = coords[0][0]
        for (var battleship of battleships){
            if (battleship.includes(userGuess)) {
                console.log('hit');
                hitCounter++
                battleship[battleship.length-1]--
                if (battleship[battleship.length-1] == 0){
                    console.log("sunk")
                }
                if (hitCounter == 17)
                    console.log('game over')
                for (var row of coords){
                    for (var col of row){
                        if (userGuess === col){
                            row.splice(col.indexOf(userGuess), 1, '*')
                        }
                    }
                }
            }
        }
    }
    function rand(min, max) {
        let randomNum = Math.random() * (max - min) + min;
        return Math.floor(randomNum);
      } 
    
    function computerGuess() {
    
        var computerxcoord = rand(0,9)
        var computerycoord = rand(0,9)
    
        var aiGuess = coords[computerxcoord][computerycoord]
        console.log(aiGuess);
    function aiGuesser (){
        computerPicker = rand(0,3)
        if (computerPicker == 0){
            aiGuess = coords[computerxcoord+1][computerycoord]
            return aiGuess
        }
        if (computerPicker == 1){
            aiGuess = coords[computerxcoord-1][computerycoord]
            return aiGuess
        }
        if (computerPicker == 2){
            aiGuess = coords[computerxcoord][computerycoord+1]
            return aiGuess
        }
        if (computerPicker == 3){
            aiGuess = coords[computerxcoord][computerycoord-1]
            return aiGuess
        }
    }
        if ("T" == "T"){
            aiGuesser();
            while (coords[computerxcoords] == -1){
                aiGuesser();
            }
            while (coords[computerxcoords] == 10){
                aiGuesser();
            }
            while (coords[computerycoords] == -1){
                aiGuesser();
            }
            while (coords[computerycoords] == 10){
                aiGuesser();
            }
        } else {
            var computerxcoord = rand(0,9)
            var computerycoord = rand(0,9)
    
            var aiGuess = coords[computerxcoord][computerycoord]
            console.log(aiGuess);
    
            if (computerGuesses.includes(aiGuess)){
                computerGuess()
    
            } else {
                computerGuesses.push(aiGuess)
                console.log(aiGuess)
                return aiGuess
    
            }
        }
    }
    while (hitCounter < 17 & turnsleft < 50){
        turnsleft++
        chooseNcheck
        computerGuess
    }
    
    chooseNcheck();
    computerGuess();