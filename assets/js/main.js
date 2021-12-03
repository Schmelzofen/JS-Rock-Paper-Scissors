// Radiobuttons
let funf = document.getElementById("funf")
let zehn = document.getElementById("zehn")
let funfzehn = document.getElementById("funfzehn")
let zwanzig = document.getElementById("zwanzig")

// Punkte Output
let rounds = document.getElementById("round-container")
let player = document.getElementById("player")
let comp = document.getElementById("comp")
// Ergebnis Output
let result = document.getElementById("result")

// Wertezuweisung
let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")

rock.value = "rock"
paper.value = "paper"
scissors.value = "scissors"

let count = 0
let playerCount = 0
let enemyCount = 0

// Gegner Auswahl
const enemyAuswahl = () => {
    enemy = Math.floor(Math.random()*3)+1
    if(enemy == 1){
        return enemy = "rock"
    }   else if(enemy == 2){
        return enemy = "paper"
    }   else{
        return enemy = "scissors"
    }
}

// Win-Lose Funktion
let playGame = (x) => {
    const gegner = enemyAuswahl() // neue Auswahl bei jedem Klick
    if(funf.checked == true){
        count+=1
        rounds.innerHTML = `${count}/5`
        if(x.value == "rock" && gegner == "rock" || x.value == "paper" && gegner == "paper" || x.value == "scissors" && gegner == "scissors"){
            console.log("draw")
        }   else if(x.value == "rock" && gegner == "scissors" || x.value == "scissors" && gegner == "paper" || x.value == "paper" && gegner == "rock"){
                console.log("win")
                playerCount+=1
                player.innerHTML = playerCount
            }        else if(x.value == "rock" && gegner == "paper" || x.value == "scissors" && gegner == "rock" || x.value == "paper" && gegner == "scissors"){
                    console.log("lose")
                    enemyCount+=1
                    comp.innerHTML = enemyCount
                }
    }   else if(zehn.checked == true){
        count+=1
        rounds.innerHTML = `${count}/10`
        if(x.value == "rock" && gegner == "rock" || x.value == "paper" && gegner == "paper" || x.value == "scissors" && gegner == "scissors"){
            console.log("draw")
        }   else if(x.value == "rock" && gegner == "scissors" || x.value == "scissors" && gegner == "paper" || x.value == "paper" && gegner == "rock"){
                console.log("win")
            }        else if(x.value == "rock" && gegner == "paper" || x.value == "scissors" && gegner == "rock" || x.value == "paper" && gegner == "scissors"){
                    console.log("lose")
                }
    }   else if(funfzehn.checked == true){
        count+=1
        rounds.innerHTML = `${count}/15`
        if(x.value == "rock" && gegner == "rock" || x.value == "paper" && gegner == "paper" || x.value == "scissors" && gegner == "scissors"){
            console.log("draw")
        }   else if(x.value == "rock" && gegner == "scissors" || x.value == "scissors" && gegner == "paper" || x.value == "paper" && gegner == "rock"){
                console.log("win")
            }        else if(x.value == "rock" && gegner == "paper" || x.value == "scissors" && gegner == "rock" || x.value == "paper" && gegner == "scissors"){
                    console.log("lose")
                }
    }   else if(zwanzig.checked == true){
        count+=1
        rounds.innerHTML = `${count}/20`
        if(x.value == "rock" && gegner == "rock" || x.value == "paper" && gegner == "paper" || x.value == "scissors" && gegner == "scissors"){
            console.log("draw")
        }   else if(x.value == "rock" && gegner == "scissors" || x.value == "scissors" && gegner == "paper" || x.value == "paper" && gegner == "rock"){
                console.log("win")
            }        else if(x.value == "rock" && gegner == "paper" || x.value == "scissors" && gegner == "rock" || x.value == "paper" && gegner == "scissors"){
                    console.log("lose")
                }
    }
    console.log(count)
}