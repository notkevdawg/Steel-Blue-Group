var coords = [
    ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1", "i1"],
    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2", "i2"],
    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3", "i3"],
    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4", "i4"],
    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5", "i5"],
    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6", "i6"],
    ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7", "i7"],
    ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8", "i8"],
    ["a9", "b9", "c9", "d9", "e9", "f9", "g9", "h9", "i9"]
    ]

var computerCoords = [
        ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1", "i1"],
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
    var lostCounter = []
    var hitCounter = [0]
    
    var battleship1 = [
        coords[0][0],
        '',
        int1 = 2
    ]
    
    var battleship2 = [
        '',
        '',
        ''
    ]
    var battleship3 = [
        [4][3],
        coords[4][2],
        coords[4][1]
    ]
    var battleship4 = [
        coords[4][3],
        coords[4][2],
        coords[4][1],
        coords[4][1]
    ]
    var battleship5 = [
        coords[4][3],
        coords[4][2],
        coords[4][1],
        coords[4][1],
        coords[4][1]
    ]

    var battleships = [battleship1, battleship2, battleship3, battleship4, battleship5]
    function begin(){
    }
    // userGuess = a1 needs to be deleted
    function chooseNcheck() {
        //var userGuess = document.getElementById("needs to change").onclick
        var userGuess = "a1"
        for (var battleship of battleships){
            for(var key of battleship) {
                if (userGuess === key){
                    console.log('hit');
                    hitCounter++
                    if (hitCounter == 17)
                        console.log('game over')
                    for (var row of coords){
                        for (var col of row){
                            if (userGuess === col){
                                row.splice(col.indexOf(key), 1, '')
                                for (battleship of battleships){
                                    if (battleship = ''){
                                        console.log("sunk")
                                    }
                                }
                            }
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

    
    function computerCheckIfRepeat(){
        if (computerGuesses.includes(aiGuess)){
            computerGuess()

        } else {
            computerGuesses.push(aiGuess)
            console.log(aiGuess)
            return aiGuess
            
        }
    }
    function computerGuess() {
        
        var computerxcoord = rand(0,9)
        var computerycoord = rand(0,9)

        var aiGuess = coords[computerxcoord][computerycoord]
        console.log(aiGuess);

        if ("T" == "T"){
            
            computerPicker = rand(0,3)
            if (computerPicker == 0){
                aiGuess = coords[computerxcoord+1][computerycoord]
                computerCheckIfRepeat()
                return aiGuess
            }
            if (computerPicker == 1){
                aiGuess = coords[computerxcoord-1][computerycoord]
                computerCheckIfRepeat()
                return aiGuess
            }
            if (computerPicker == 2){
                aiGuess = coords[computerxcoord][computerycoord+1]
                computerCheckIfRepeat()
                return aiGuess
            }
            if (computerPicker == 3){
                aiGuess = coords[computerxcoord][computerycoord-1]
                computerCheckIfRepeat()
                return aiGuess
            }


        } else {
            var computerxcoord = rand(0,9)
            var computerycoord = rand(0,9)

            var aiGuess = coords[computerxcoord][computerycoord]
            console.log(aiGuess);

            
        }

    
    



        




    



    }

    chooseNcheck();
    computerGuess();
    



