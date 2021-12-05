// Radiobuttons
let auswahl = document.getElementById("auswahl")
let runden = document.getElementsByName("runden")
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
// Statistik (Rundenverlauf)
let stats = document.getElementById("stat-log")
let statsEnemy = document.getElementById("stat-log-enemy")
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

roundCounter = () => {
    for(let i=0;i<runden.length;i++){
        if(runden[i].checked){
            console.log(runden[i].value)
            return runden[i].value
        }
    }
}

// Win-Lose Funktion
let playGame = (x) => {
    count+=1
    let li = document.createElement("li")
    let liEnemy = document.createElement("li")
    howMany.innerHTML = `round:  ${count}/${roundCounter()}`
    roundShow.style.visibility = "hidden"
    if(count == roundCounter()){
        if(playerCount > enemyCount){
            auswahl.innerHTML = "You've won, gratulations!"
            outputDraw.innerHTML = " "
            outputWin.innerHTML = " "
            outputLose.innerHTML = " "
            result.innerHTML = " "
        } else if(playerCount < enemyCount){
            auswahl.innerHTML = "You've lost, how 'bout a new round?"
            outputDraw.innerHTML = " "
            outputWin.innerHTML = " "
            outputLose.innerHTML = " "
            }   else{
                    auswahl.innerHTML = "Draw, maybe try again?"
            }
    return null
    }
    let gegner = enemyAuswahl() // neue Auswahl bei jedem Klick
    rock.value = "rock"
    paper.value = "paper"
    scissors.value = "scissors"
    spock.value = "spock"
    lizard.value = "lizard"
        if(x.value == gegner){
            result.innerHTML = "Draw!"
            outputDraw.innerHTML = `${x.value} against ${gegner}`
            outputWin.innerHTML = " "
            outputLose.innerHTML = " "
        }   else if(x.value == "rock" && gegner == "scissors" || x.value == "scissors" && gegner == "paper" || x.value == "paper" && gegner == "rock" || x.value == "spock" && gegner == "rock" || x.value == "spock" && gegner == "scissors" || x.value == "lizard" && gegner == "paper" || x.value == "lizard" && gegner == "spock" || x.value == "rock" && gegner == "lizard" || x.value == "scissors" && gegner == "lizard" || x.value == "paper" && gegner == "spock"){
                playerCount+=1
                player.innerHTML = playerCount
                result.innerHTML = "Win!"
                outputWin.innerHTML = `${x.value} beats ${enemy}`
                outputLose.innerHTML = " "
                outputDraw.innerHTML = " "
            }        else{
                    enemyCount+=1
                    comp.innerHTML = enemyCount
                    result.innerHTML = "Try again!"
                    outputLose.innerHTML = `oh no, the enemy took ${enemy}`
                    outputWin.innerHTML = " "
                    outputDraw.innerHTML = " "
                }
    li.textContent += `round ${count}: ${x.value}`
    liEnemy.textContent += `${gegner}`
    stats.append(li)
    statsEnemy.append(liEnemy)
}