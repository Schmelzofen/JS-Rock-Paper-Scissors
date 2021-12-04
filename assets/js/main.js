// Radiobuttons
let funf = document.getElementById("funf")
let zehn = document.getElementById("zehn")
let funfzehn = document.getElementById("funfzehn")
let zwanzig = document.getElementById("zwanzig")
let auswahl = document.getElementById("auswahl")
// Punkte Output
let rounds = document.getElementById("round-container")
let player = document.getElementById("player")
let comp = document.getElementById("comp")
let roundShow = document.getElementById("roundShow")
let howMany = document.getElementById("howMany")
// Zwischenergebnis Output
let outputWin = document.getElementById("outputWin")
let outputLose = document.getElementById("outputLose")
let outputDraw = document.getElementById("outputDraw")
// Ergebnis Output
let result = document.getElementById("result")

// Wertezuweisung
let count = 0
let playerCount = 0
let enemyCount = 0

// Gegner Auswahl
const enemyAuswahl = () => {
    enemy = Math.floor(Math.random()*5)+1
    console.log(enemy)
    if(enemy == 1){
        return enemy = "rock"
    }   else if(enemy == 2){
        return enemy = "paper"
    }   else if(enemy == 3){
        return enemy = "scissors"
    }   else if(enemy == 4){
        return enemy = "spock"
    }   else if(enemy == 5){
        return enemy = "lizard"
    }
}

// Win-Lose Funktion
let playGame = (x) => {
    let gegner = enemyAuswahl() // neue Auswahl bei jedem Klick
    console.log(gegner)
    rock.value = "rock"
    paper.value = "paper"
    scissors.value = "scissors"
    spock.value = "spock"
    lizard.value = "lizard"
    if(funf.checked == true){
        count+=1
        howMany.innerHTML = `round:  ${count}/5`
        rounds.innerHTML = " "
        if(x.value == "rock" && gegner == "rock" || x.value == "paper" && gegner == "paper" || x.value == "scissors" && gegner == "scissors" || x.value == "spock" && gegner == "spock" || x.value == "lizard" && gegner == "lizard"){
            result.innerHTML = "Draw!"
            outputDraw.innerHTML = `You took ${x.value} and the enemy took ${gegner}`
            outputWin.innerHTML = " "
            outputLose.innerHTML = " "
        }   else if(x.value == "rock" && gegner == "scissors" || x.value == "scissors" && gegner == "paper" || x.value == "paper" && gegner == "rock" || x.value == "spock" && gegner == "rock" || x.value == "spock" && gegner == "scissors" || x.value == "lizard" && gegner == "paper" || x.value == "lizard" && gegner == "spock" || x.value == "rock" && gegner == "lizard" || x.value == "scissors" && gegner == "lizard" || x.value == "paper" && gegner == "spock"){
                console.log("win")
                playerCount+=1
                player.innerHTML = playerCount
                result.innerHTML = "Win!"
                outputWin.innerHTML = `${x.value} beats ${enemy}`
                outputLose.innerHTML = " "
                outputDraw.innerHTML = " "
            }        else if(x.value == "rock" && gegner == "paper" || x.value == "scissors" && gegner == "rock" || x.value == "paper" && gegner == "scissors" || x.value == "lizard" && gegner == "rock" || x.value == "lizard" && gegner == "scissors" || x.value == "spock" && gegner == "lizard" || x.value == "spock" && gegner == "paper" || x.value == "rock" && gegner == "spock" || x.value == "scissors" && gegner == "spock" || x.value == "paper" && gegner == "lizard"){
                    console.log("lose")
                    enemyCount+=1
                    comp.innerHTML = enemyCount
                    result.innerHTML = "Try again!"
                    outputLose.innerHTML = `${enemy} beats ${x.value}`
                    outputWin.innerHTML = " "
                    outputDraw.innerHTML = " "
                }
                if(count == 5 && playerCount == enemyCount){
                    auswahl.innerHTML = "Draw, maybe try again?"
                }   else if(count == 5 && playerCount > enemyCount){
                    auswahl.innerHTML = "You've won, gratulations!"
                    outputDraw.innerHTML = " "
                    outputWin.innerHTML = " "
                    outputLose.innerHTML = " "
                    result.innerHTML = " "
                } else if(count == 5 && playerCount < enemyCount){
                    auswahl.innerHTML = "You've lost, how 'bout a new round?"
                    outputDraw.innerHTML = " "
                    outputWin.innerHTML = " "
                    outputLose.innerHTML = " "
                }
    }   else if(zehn.checked == true){
        count+=1
        howMany.innerHTML = `round:  ${count}/10`
        rounds.innerHTML = ""
        if(x.value == "rock" && gegner == "rock" || x.value == "paper" && gegner == "paper" || x.value == "scissors" && gegner == "scissors" || x.value == "spock" && gegner == "spock" || x.value == "lizard" && gegner == "lizard"){
            result.innerHTML = "Draw!"
            outputDraw.innerHTML = `You took ${x.value} and the enemy took ${gegner}`
            outputWin.innerHTML = " "
            outputLose.innerHTML = " "
        }   else if(x.value == "rock" && gegner == "scissors" || x.value == "scissors" && gegner == "paper" || x.value == "paper" && gegner == "rock" || x.value == "spock" && gegner == "rock" || x.value == "spock" && gegner == "scissors" || x.value == "lizard" && gegner == "paper" || x.value == "lizard" && gegner == "spock" || x.value == "rock" && gegner == "lizard" || x.value == "scissors" && gegner == "lizard" || x.value == "paper" && gegner == "spock"){
                console.log("win")
                playerCount+=1
                player.innerHTML = playerCount
                result.innerHTML = "Win!"
                outputWin.innerHTML = `${x.value} beats ${enemy}`
                outputLose.innerHTML = " "
                outputDraw.innerHTML = " "
            }        else if(x.value == "rock" && gegner == "paper" || x.value == "scissors" && gegner == "rock" || x.value == "paper" && gegner == "scissors" || x.value == "lizard" && gegner == "rock" || x.value == "lizard" && gegner == "scissors" || x.value == "spock" && gegner == "lizard" || x.value == "spock" && gegner == "paper" || x.value == "rock" && gegner == "spock" || x.value == "scissors" && gegner == "spock" || x.value == "paper" && gegner == "lizard"){
                    console.log("lose")
                    enemyCount+=1
                    comp.innerHTML = enemyCount
                    result.innerHTML = "Try again!"
                    outputLose.innerHTML = `${enemy} beats ${x.value}`
                    outputWin.innerHTML = " "
                    outputDraw.innerHTML = " "
                }
                if(count == 10 && playerCount == enemyCount){
                    auswahl.innerHTML = "Draw, maybe try again?"
                }   else if(count == 10 && playerCount > enemyCount){
                    auswahl.innerHTML = "You've won, gratulations!"
                    outputDraw.innerHTML = " "
                    outputWin.innerHTML = " "
                    outputLose.innerHTML = " "
                    result.innerHTML = " "
                } else if(count == 10 && playerCount < enemyCount){
                    auswahl.innerHTML = "You've lost, how 'bout a new round?"
                    outputDraw.innerHTML = " "
                    outputWin.innerHTML = " "
                    outputLose.innerHTML = " "
                }
    }   else if(funfzehn.checked == true){
        count+=1
        howMany.innerHTML = `round:  ${count}/15`
        rounds.innerHTML = ""
        if(x.value == "rock" && gegner == "rock" || x.value == "paper" && gegner == "paper" || x.value == "scissors" && gegner == "scissors" || x.value == "spock" && gegner == "spock" || x.value == "lizard" && gegner == "lizard"){
            result.innerHTML = "Draw!"
            outputDraw.innerHTML = `You took ${x.value} and the enemy took ${gegner}`
            outputWin.innerHTML = " "
            outputLose.innerHTML = " "
        }   else if(x.value == "rock" && gegner == "scissors" || x.value == "scissors" && gegner == "paper" || x.value == "paper" && gegner == "rock" || x.value == "spock" && gegner == "rock" || x.value == "spock" && gegner == "scissors" || x.value == "lizard" && gegner == "paper" || x.value == "lizard" && gegner == "spock" || x.value == "rock" && gegner == "lizard" || x.value == "scissors" && gegner == "lizard" || x.value == "paper" && gegner == "spock"){
                console.log("win")
                playerCount+=1
                player.innerHTML = playerCount
                result.innerHTML = "Win!"
                outputWin.innerHTML = `${x.value} beats ${enemy}`
                outputLose.innerHTML = " "
                outputDraw.innerHTML = " "
            }        else if(x.value == "rock" && gegner == "paper" || x.value == "scissors" && gegner == "rock" || x.value == "paper" && gegner == "scissors" || x.value == "lizard" && gegner == "rock" || x.value == "lizard" && gegner == "scissors" || x.value == "spock" && gegner == "lizard" || x.value == "spock" && gegner == "paper" || x.value == "rock" && gegner == "spock" || x.value == "scissors" && gegner == "spock" || x.value == "paper" && gegner == "lizard"){
                    console.log("lose")
                    enemyCount+=1
                    comp.innerHTML = enemyCount
                    result.innerHTML = "Try again!"
                    outputLose.innerHTML = `${enemy} beats ${x.value}`
                    outputWin.innerHTML = " "
                    outputDraw.innerHTML = " "
                }
                if(count == 15 && playerCount == enemyCount){
                    auswahl.innerHTML = "Draw, maybe try again?"
                }   else if(count == 15 && playerCount > enemyCount){
                    auswahl.innerHTML = "You've won, gratulations!"
                    outputDraw.innerHTML = " "
                    outputWin.innerHTML = " "
                    outputLose.innerHTML = " "
                    result.innerHTML = " "
                } else if(count == 15 && playerCount < enemyCount){
                    auswahl.innerHTML = "You've lost, how 'bout a new round?"
                    outputDraw.innerHTML = " "
                    outputWin.innerHTML = " "
                    outputLose.innerHTML = " "
                }
    }   else if(zwanzig.checked == true){
        count+=1
        howMany.innerHTML = `round:  ${count}/20`
        rounds.innerHTML = ""
        if(x.value == "rock" && gegner == "rock" || x.value == "paper" && gegner == "paper" || x.value == "scissors" && gegner == "scissors" || x.value == "spock" && gegner == "spock" || x.value == "lizard" && gegner == "lizard"){
            result.innerHTML = "Draw!"
            outputDraw.innerHTML = `You took ${x.value} and the enemy took ${gegner}`
            outputWin.innerHTML = " "
            outputLose.innerHTML = " "
        }   else if(x.value == "rock" && gegner == "scissors" || x.value == "scissors" && gegner == "paper" || x.value == "paper" && gegner == "rock" || x.value == "spock" && gegner == "rock" || x.value == "spock" && gegner == "scissors" || x.value == "lizard" && gegner == "paper" || x.value == "lizard" && gegner == "spock" || x.value == "rock" && gegner == "lizard" || x.value == "scissors" && gegner == "lizard" || x.value == "paper" && gegner == "spock"){
                console.log("win")
                playerCount+=1
                player.innerHTML = playerCount
                result.innerHTML = "Win!"
                outputWin.innerHTML = `${x.value} beats ${enemy}`
                outputLose.innerHTML = " "
                outputDraw.innerHTML = " "
            }        else if(x.value == "rock" && gegner == "paper" || x.value == "scissors" && gegner == "rock" || x.value == "paper" && gegner == "scissors" || x.value == "lizard" && gegner == "rock" || x.value == "lizard" && gegner == "scissors" || x.value == "spock" && gegner == "lizard" || x.value == "spock" && gegner == "paper" || x.value == "rock" && gegner == "spock" || x.value == "scissors" && gegner == "spock" || x.value == "paper" && gegner == "lizard"){
                    console.log("lose")
                    enemyCount+=1
                    comp.innerHTML = enemyCount
                    result.innerHTML = "Try again!"
                    outputLose.innerHTML = `${enemy} beats ${x.value}`
                    outputWin.innerHTML = " "
                    outputDraw.innerHTML = " "
                }
                if(count == 20 && playerCount == enemyCount){
                    auswahl.innerHTML = "Draw, maybe try again?"
                }   else if(count == 20 && playerCount > enemyCount){
                    auswahl.innerHTML = "You've won, gratulations!"
                    outputDraw.innerHTML = " "
                    outputWin.innerHTML = " "
                    outputLose.innerHTML = " "
                    result.innerHTML = " "
                } else if(count == 20 && playerCount < enemyCount){
                    auswahl.innerHTML = "You've lost, how 'bout a new round?"
                    outputDraw.innerHTML = " "
                    outputWin.innerHTML = " "
                    outputLose.innerHTML = " "
                }
    }
}
