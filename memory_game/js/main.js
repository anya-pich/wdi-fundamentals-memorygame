console.log("Up and running!");

let cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
let cardsInPlay = [];

let wins = 0;
let games = 0;

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	  console.log("You found a match!");
	  document.querySelector('.prompt').textContent = "You found a match!";
	  wins += 1;
	} else {
	  console.log("Sorry, try again.");
	  document.querySelector('.prompt').textContent = "Sorry, try again.";
	}
}

function flipCard() {
	if (cardsInPlay.length<2) {
		let cardId = this.getAttribute('data-id');
		console.log("User flipped "+cards[cardId].rank);
		cardsInPlay.push(cards[cardId].rank);
		console.log(cards[cardId].cardImage);
		console.log(cards[cardId].suit);
		this.setAttribute('src',cards[cardId].cardImage);
	}
	if (cardsInPlay.length===2) {
		checkForMatch();
	}
}

function createBoard() {
	for (let i=0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();

function playAgain() {
	document.getElementById('game-board').innerHTML = '';
	createBoard();
	cardsInPlay = [];
	games += 1;
	document.querySelector('.wins').textContent = wins;
	document.querySelector('.games').textContent = games;
	document.querySelector('.prompt').textContent = "You know the drill..";
}

document.getElementById('play-again').addEventListener('click',playAgain);

