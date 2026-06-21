let homeScore = document.getElementById("home_score")
let guestScore = document.getElementById("guest_score")
console.log(homeScore)
console.log(guestScore)

let home_Score = 0
console.log(home_Score)

let guest_Score = 0
console.log(guest_Score)

function addOneHome(){
    home_Score += 1
    console.log(home_Score)
    homeScore.textContent = home_Score
}

function addTwoHome(){
    home_Score += 2
    console.log(home_Score)
    homeScore.textContent = home_Score
}

function addThreeHome(){
    home_Score += 3
    console.log(home_Score)
    homeScore.textContent = home_Score
}

function addOneGuest(){
    guest_Score += 1
    console.log(guest_Score)
    guestScore.textContent = guest_Score
}

function addTwoGuest(){
    guest_Score += 2
    console.log(guest_Score)
    guestScore.textContent = guest_Score
}

function addThreeGuest(){
    guest_Score += 3
    console.log(guest_Score)
    guestScore.textContent = guest_Score
}