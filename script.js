let homeCount = 0
let guestCount = 0
let totalHome = document.getElementById("home-score")
let totalGuest = document.getElementById("guest-score")


//Home buttons//

function addOneH() {
    homeCount += +1
    totalHome.textContent = homeCount
}

function addTwoH() {
    homeCount += +2
    totalHome.textContent = homeCount
}

function addThreeH() {
    homeCount += +3
    totalHome.textContent = homeCount
}

//Guest buttons//
function addOneG() {
    guestCount += +1
    totalGuest.textContent = guestCount
}

function addTwoG() {
    guestCount += +2
    totalGuest.textContent = guestCount
}

function addThreeG() {
    guestCount += +3
    totalGuest.textContent = guestCount
}
