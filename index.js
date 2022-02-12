const button = document.querySelector(".small-cube1")
const tip = document.querySelector(".tip")
let buttonLeft = window.getComputedStyle(button).left
let buttonTop = window.getComputedStyle(button).top
const smallestCube = document.querySelector(".small-cube2")
const smallCircle = document.querySelector(".small-circle")
const text = document.querySelector(".text")
const author = document.querySelector(".author")
const language = document.querySelector(".language")
let lang = 'en'

const moveButton = () => {
	tip.classList.add("hidden")
	let buttonLeft = window.getComputedStyle(button).left
	let buttonTop = window.getComputedStyle(button).top
	if (buttonTop === '0px' && buttonLeft === '0px') {
		button.style.left = "430px"
		button.style.top = "0"
		button.style.transform = "rotateZ(0.25turn)"
		smallestCube.style.transform = "rotateZ(0.5turn)"
		smallCircle.style.transform = "rotateY(0.5turn)"
		getData();
	}
	else if (buttonTop === '0px' && buttonLeft === '430px') {
		button.style.left = "430px"
		button.style.top = "430px"
		button.style.transform = "rotateZ(0.5turn)"
		smallestCube.style.transform = "rotateZ(1turn)"
		smallCircle.style.transform = "rotateY(1turn)"
		getData();
	}
	else if (buttonTop === '430px' && buttonLeft === '430px') {
		button.style.left = "0"
		button.style.top = "430px"
		button.style.transform = "rotateZ(0.25turn)"
		smallestCube.style.transform = "rotateZ(0.5turn)"
		smallCircle.style.transform = "rotateY(2turn)"
		getData();
	}
	else if (buttonTop === '430px' && buttonLeft === '0px') {
		button.style.left = "0"
		button.style.top = "0"
		button.style.transform = "rotateZ(0.5turn)"
		smallestCube.style.transform = "rotateZ(1turn)"
		smallCircle.style.transform = "rotateY(1.5turn)"
		getData();
	}
}

async function getData() {
	if (lang === 'en') {
		const res = await fetch("https://type.fit/api/quotes");
		const data = await res.json();
		let random = Math.floor(Math.random() * 1550)
		text.textContent = data[random].text
		author.textContent = data[random].author
	} else if (lang === 'ru') {
		const res = await fetch("quotes.json");
		const data = await res.json();
		let random = Math.floor(Math.random() * 98)
		text.textContent = data[random].text
		author.textContent = data[random].author
	}
}
getData(lang);

const changeLang = () => {
	if (lang === 'en') {
		lang = 'ru'
		language.textContent = '→En'
		moveButton()
	} else if (lang === 'ru') {
		lang = 'en'
		language.textContent = '→Ru'
		moveButton()
	}
}

button.addEventListener('click', moveButton)
language.addEventListener('click', changeLang)