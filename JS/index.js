// Pop up
const close = document.getElementById("close")
const popup = document.getElementById("popup")

let opacityValue = 0;

// Dices
const P_dice1 = document.getElementById("p_d1")
const P_dice2 = document.getElementById("p_d2")
let Pround_score = document.getElementById("p_s1")
let Ptotal_score = document.getElementById("p_s2")


const C_dice1 = document.getElementById("c_d1")
const C_dice2 = document.getElementById("c_d2")
let Cround_score = document.getElementById("c_s1")
let Ctotal_score = document.getElementById("c_s2")


const roll = document.getElementById("roll")
const chart = document.getElementById("chart")

var player_round_score = 0
var player_total_score = 0

var cpu_round_score = 0
var cpu_total_score = 0

var path = 'img/dice'

count = 0

var d1 = 0
var d2 = 0
var d3 = 0
var d4 = 0
var d5 = 0
var d6 = 0

roll.disabled = false

close.addEventListener('click', (e) => {
    popup.style.opacity = 0
    roll.disabled = false
})

roll.addEventListener('click', (e) => {

    P_dice1.style.display = "block"
    P_dice2.style.display = "block"
    C_dice1.style.display = "block"
    C_dice2.style.display = "block"

    roll.innerHTML = "Roll"


    function popUP () {
        opacityValue = opacityValue + 0.01
        if(opacityValue <= 1){
            popup.style.opacity = opacityValue
            roll.disabled = true
            requestAnimationFrame( popUP )
            
        } else {
            popup.style.opacity = 1
            roll.disabled = true
        }
       
    }

    

    function turnCount () {
        count += 1

        if (count == 3){
            if (player_total_score == cpu_total_score) {
                popupText.innerHTML = ("It's a tie")
                count = 0

                roll.innerHTML = "Play again?"
                player_total_score = 0
                cpu_total_score = 0
                popUP()
                

            } else if (player_total_score < cpu_total_score) {
                popupText.innerHTML = ("Computer has won")
                count = 0

                roll.innerHTML = "Play again?"
                player_total_score = 0
                cpu_total_score = 0
                popUP()


            } else if (player_total_score > cpu_total_score) {
                popupText.innerHTML = ("Player has won")
                count = 0

                roll.innerHTML = "Play again?"
                player_total_score = 0
                cpu_total_score = 0
                popUP()

            }
            
        } 

    }


    function playerRoll (){
        
        var player_dice1 = Math.floor(Math.random() * 6) + 1
        var player_dice2 = Math.floor(Math.random() * 6) + 1


        if (player_dice1 == 1) {
            d1 += 1
        } else if (player_dice1 == 2) {
            d2 += 1
        } else if (player_dice1 == 3) {
            d3 += 1
        } else if (player_dice1 == 4) {
            d4 += 1
        } else if (player_dice1 == 5) {
            d5 += 1
        } else if (player_dice1 == 6) {
            d6 += 1
        }

        if (player_dice2 == 1) {
            d1 += 1
        } else if (player_dice2 == 2) {
            d2 += 1
        } else if (player_dice2 == 3) {
            d3 += 1
        } else if (player_dice2 == 4) {
            d4 += 1
        } else if (player_dice2 == 5) {
            d5 += 1
        } else if (player_dice2 == 6) {
            d6 += 1
        }



        P_dice1.src = path+player_dice1+'.jpg'
        P_dice2.src = path+player_dice2+'.jpg'
        

        if (player_dice1 == 1 || player_dice2 == 1) {
            player_round_score = 0
            Pround_score.innerHTML = player_round_score

            player_total_score += player_round_score 
            Ptotal_score.innerHTML = player_total_score

        } else if (player_dice1 == player_dice2) {
            player_round_score = (player_dice1 + player_dice2) * 2
            Pround_score.innerHTML = player_round_score

            player_total_score += player_round_score 
            Ptotal_score.innerHTML = player_total_score

        } else {
            player_round_score = player_dice1 + player_dice2
            Pround_score.innerHTML = player_round_score

            player_total_score += player_round_score 
            Ptotal_score.innerHTML = player_total_score
        }

    }

    function cpuRoll () {
        var computer_dice1 = Math.floor(Math.random() * 6) + 1
        var computer_dice2 = Math.floor(Math.random() * 6) + 1


        if (computer_dice1 == 1) {
            d1 += 1
        } else if (computer_dice1 == 2) {
            d2 += 1
        } else if (computer_dice1 == 3) {
            d3 += 1
        } else if (computer_dice1 == 4) {
            d4 += 1
        } else if (computer_dice1 == 5) {
            d5 += 1
        } else if (computer_dice1 == 6) {
            d6 += 1
        }

        if (computer_dice2 == 1) {
            d1 += 1
        } else if (computer_dice2 == 2) {
            d2 += 1
        } else if (computer_dice2 == 3) {
            d3 += 1
        } else if (computer_dice2 == 4) {
            d4 += 1
        } else if (computer_dice2 == 5) {
            d5 += 1
        } else if (computer_dice2 == 6) {
            d6 += 1
        }

        C_dice1.src = path+computer_dice1+'.jpg'
        C_dice2.src = path+computer_dice2+'.jpg'

        if (computer_dice1 == 1 || computer_dice2 == 1) {
            cpu_round_score = 0
            Cround_score.innerHTML = cpu_round_score

            cpu_total_score += cpu_round_score 
            Ctotal_score.innerHTML = cpu_total_score

        } else if (computer_dice1 == computer_dice2) {
            cpu_round_score = (computer_dice1 + computer_dice2) * 2
            Cround_score.innerHTML = cpu_round_score

            cpu_total_score += cpu_round_score 
            Ctotal_score.innerHTML = cpu_total_score

        } else {
            cpu_round_score = computer_dice1 + computer_dice2
            Cround_score.innerHTML = cpu_round_score

            cpu_total_score += cpu_round_score 
            Ctotal_score.innerHTML = cpu_total_score
        }

    }

    
    playerRoll()
    cpuRoll()
    turnCount()
})

const rollsper = document.getElementById("rollsper")
const infor = document.getElementById("infor")
const breaker = document.getElementById("break")

class gameInfo {
        test(){
            rollsper.innerHTML = " "

            rollsper.innerHTML = "1 has been rolled " + d1 + " times <br>"
            rollsper.innerHTML += "2 has been rolled " + d2 + " times <br>"
            rollsper.innerHTML += "3 has been rolled " + d3 + " times <br>"
            rollsper.innerHTML += "4 has been rolled " + d4 + " times <br>"
            rollsper.innerHTML += "5 has been rolled " + d5 + " times <br>"
            rollsper.innerHTML += "6 has been rolled " + d6 + " times <br>"

        }
}

let currentInfo = new gameInfo()



chart.addEventListener('click', (e) => {
    infor.style.opacity = 1
    currentInfo.test()
})

breaker.addEventListener('click', (e) => {
    infor.style.opacity = 0
})