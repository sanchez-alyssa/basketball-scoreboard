let homeElement = document.getElementById('home-count-element')
let guestElement = document.getElementById('guest-count-element')
let guest = document.getElementById('guest')
let homeCount = 0
let guestCount = 0

// home
function homeAddOne() {
	homeCount += 1
	homeElement.textContent = homeCount
	updateCounts()
}
function homeAddTwo() {
	homeCount += 2
	homeElement.textContent = homeCount
	updateCounts()
}
function homeAddThree() {
	homeCount += 3
	homeElement.textContent = homeCount
	updateCounts()
}
// guest
function guestAddOne() {
	guestCount += 1
	guestElement.textContent = guestCount
	updateCounts()
}
function guestAddTwo() {
	guestCount += 2
	guestElement.textContent = guestCount
	updateCounts()
}
function guestAddThree() {
	guestCount += 3
	guestElement.textContent = guestCount
	updateCounts()
}

// Function to update the counts and styles
function updateCounts() {
	homeElement.textContent = homeCount
	guestElement.textContent = guestCount

	if (homeCount > guestCount) {
		homeElement.style.color = 'red'
		guestElement.style.color = ''
	} else if (guestCount > homeCount) {
		guestElement.style.color = 'red'
		homeElement.style.color = ''
	} else if (homeCount === guestCount) {
		homeElement.style.color = 'red'
		guestElement.style.color = 'red'
	} else {
		homeElement.style.backgroundColor = ''
		guestElement.style.backgroundColor = ''
	}
}
